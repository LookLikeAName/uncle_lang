import {
    Assign,
    Binary,
    Block,
    Call,
    Expr,
    Expression,
    Grouping,
    If,
    IndexAccess,
    Literal,
    Logical,
    Print,
    Stmt,
    Unary,
    Var,
    Variable,
    VectorLiteral,
    Visitor,
    StmtVisitor
} from "./ast";
import { Token, TokenType } from "./lexer";

/**
 * A custom error class for runtime errors. This helps us distinguish between
 * errors that happen during interpretation and other types of errors.
 */
class RuntimeError extends Error {
    constructor(public token: any, message: string) {
        super(message);
    }
}

/**
 * The Environment class is responsible for managing the state of variables in
 * the program. It's a symbol table that maps variable names to their values.
 * It supports nested scopes, which is crucial for features like blocks and
 * functions.
 */
class Environment {
    private readonly values: Map<string, any> = new Map();
    readonly enclosing: Environment | null;

    /**
     * @param enclosing The enclosing environment, for nested scopes.
     */
    constructor(enclosing: Environment | null = null) {
        this.enclosing = enclosing;
    }

    /**
     * Defines a new variable in the current scope.
     * @param name The name of the variable.
     * @param value The initial value of the variable.
     */
    define(name: string, value: any) {
        this.values.set(name, value);
    }

    /**
     * Retrieves the value of a variable. It first looks in the current scope,
     * and if it's not found, it recursively searches in the enclosing scopes.
     * @param name The token for the variable's name.
     * @returns The value of the variable.
     */
    get(name: Token): any {
        if (this.values.has(name.lexeme)) {
            return this.values.get(name.lexeme);
        }

        if (this.enclosing !== null) {
            return this.enclosing.get(name);
        }

        throw new RuntimeError(name, `Undefined variable '${name.lexeme}'.`);
    }

    /**
     * Assigns a new value to an existing variable. It follows the same scope
     * chain as `get`.
     * @param name The token for the variable's name.
     * @param value The new value.
     */
    assign(name: Token, value: any): void {
        if (this.values.has(name.lexeme)) {
            this.values.set(name.lexeme, value);
            return;
        }

        if (this.enclosing !== null) {
            this.enclosing.assign(name, value);
            return;
        }

        throw new RuntimeError(name, `Undefined variable '${name.lexeme}'.`);
    }
}


/**
 * The Interpreter is the heart of our language. It walks the Abstract Syntax
 * Tree (AST) produced by the parser and executes the code. It implements the
 * Visitor patterns for both expressions and statements.
 */
export class Interpreter implements Visitor<any>, StmtVisitor<void> {
    private environment = new Environment();
    private readonly output: (message: string) => void;

    /**
     * @param output A callback function to handle the output of the `print` statement.
     */
    constructor(output: (message: string) => void) {
        this.output = output;
    }

    /**
     * The main entry point for the interpreter. It takes a list of statements
     * and executes them.
     * @param statements The list of statements to interpret.
     */
    interpret(statements: Stmt[]) {
        try {
            for (const statement of statements) {
                this.execute(statement);
            }
        } catch (error) {
            if (error instanceof RuntimeError) {
                this.output(error.message);
            } else if (error instanceof Error) {
                this.output(error.message);
            }
        }
    }

    /**
     * A helper method to execute a single statement.
     */
    private execute(stmt: Stmt) {
        stmt.accept(this);
    }

    /**
     * Executes a block of statements in a new, nested scope.
     */
    visitBlockStmt(stmt: Block): void {
        this.executeBlock(stmt.statements, new Environment(this.environment));
    }

    /**
     * A helper method to execute a block of statements in a given environment.
     */
    executeBlock(statements: Stmt[], environment: Environment): void {
        const previous = this.environment;
        try {
            this.environment = environment;
            for (const statement of statements) {
                this.execute(statement);
            }
        } finally {
            // Restore the previous environment after the block is executed.
            this.environment = previous;
        }
    }

    /**
     * Executes an expression statement. This simply evaluates the expression.
     */
    visitExpressionStmt(stmt: Expression): void {
        this.evaluate(stmt.expression);
    }

    /**
     * Executes an if statement.
     */
    visitIfStmt(stmt: If): void {
        if (this.isTruthy(this.evaluate(stmt.condition))) {
            this.execute(stmt.thenBranch);
        } else if (stmt.elseBranch !== null) {
            this.execute(stmt.elseBranch);
        }
    }

    /**
     * Executes a print statement.
     */
    visitPrintStmt(stmt: Print): void {
        const value = this.evaluate(stmt.expression);
        this.output(this.stringify(value));
    }

    /**
     * Executes a variable declaration statement.
     */
    visitVarStmt(stmt: Var): void {
        let value = null;
        if (stmt.initializer !== null) {
            value = this.evaluate(stmt.initializer);
        }

        this.environment.define(stmt.name.lexeme, value);
    }

    /**
     * Evaluates an assignment expression.
     */
    visitAssignExpr(expr: Assign): any {
        const value = this.evaluate(expr.value);
        this.environment.assign(expr.name, value);
        return value;
    }

    /**
     * Evaluates a binary expression.
     */
    visitBinaryExpr(expr: Binary): any {
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);

        switch (expr.operator.type) {
            case TokenType.Greater:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) > Number(right);
            case TokenType.GreaterEqual:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) >= Number(right);
            case TokenType.Less:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) < Number(right);
            case TokenType.LessEqual:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) <= Number(right);
            case TokenType.BangEqual: return !this.isEqual(left, right);
            case TokenType.EqualEqual: return this.isEqual(left, right);
            case TokenType.Minus:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) - Number(right);
            case TokenType.Plus:
                if (typeof left === "number" && typeof right === "number") {
                    return left + right;
                }
                if (typeof left === "string" && typeof right === "string") {
                    return left + right;
                }
                throw new RuntimeError(expr.operator, "Operands must be two numbers or two strings.");
            case TokenType.Slash:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) / Number(right);
            case TokenType.Asterisk:
                this.checkNumberOperands(expr.operator, left, right);
                return Number(left) * Number(right);
        }

        // Unreachable.
        return null;
    }

    /**
     * Evaluates a call expression. For now, this is a placeholder as we don't
     * have user-defined functions.
     */
    visitCallExpr(expr: Call): any {
        return null;
    }

    /**
     * Evaluates a grouping expression.
     */
    visitGroupingExpr(expr: Grouping): any {
        return this.evaluate(expr.expression);
    }

    /**
     * Evaluates a literal expression.
     */
    visitLiteralExpr(expr: Literal): any {
        return expr.value;
    }

    /**
     * Evaluates a logical expression.
     */
    visitLogicalExpr(expr: Logical): any {
        const left = this.evaluate(expr.left);

        if (expr.operator.type === TokenType.Or) {
            if (this.isTruthy(left)) return left;
        } else { // AND
            if (!this.isTruthy(left)) return left;
        }

        return this.evaluate(expr.right);
    }

    /**
     * Evaluates a unary expression.
     */
    visitUnaryExpr(expr: Unary): any {
        const right = this.evaluate(expr.right);

        switch (expr.operator.type) {
            case TokenType.Bang:
                return !this.isTruthy(right);
            case TokenType.Minus:
                this.checkNumberOperand(expr.operator, right);
                return -Number(right);
        }

        // Unreachable.
        return null;
    }

    /**
     * Evaluates a variable expression.
     */
    visitVariableExpr(expr: Variable): any {
        return this.environment.get(expr.name);
    }

    /**
     * Evaluates a vector literal expression.
     */
    visitVectorLiteralExpr(expr: VectorLiteral): any {
        return expr.values.map(v => this.evaluate(v));
    }

    /**
     * Evaluates an index access expression.
     */
    visitIndexAccessExpr(expr: IndexAccess): any {
        const callee = this.evaluate(expr.callee);
        const index = this.evaluate(expr.index);

        if (Array.isArray(callee) && typeof index === 'number') {
            return callee[index];
        }

        throw new RuntimeError(expr.bracket, "Can only index into vectors with numbers.");
    }

    /**
     * A helper method to evaluate a single expression.
     */
    public evaluate(expr: Expr): any {
        return expr.accept(this);
    }

    /**
     * Determines if a value is "truthy" in our language's sense. `false` and
     * `nil` are falsey, and everything else is truthy.
     */
    private isTruthy(object: any): boolean {
        if (object === null) return false;
        if (typeof object === "boolean") return object;
        return true;
    }

    /**
     * Checks if two values are equal.
     */
    private isEqual(a: any, b: any): boolean {
        if (a === null && b === null) return true;
        if (a === null) return false;
        return a === b;
    }

    /**
     * Converts a value to a string for printing.
     */
    public stringify(object: any): string {
        if (object === null) return "nil";
        if (Array.isArray(object)) {
            return `[${object.map(o => this.stringify(o)).join(', ')}]`;
        }
        return object.toString();
    }

    /**
     * A helper method to check if an operand is a number.
     */
    private checkNumberOperand(operator: Token, operand: any) {
        if (typeof operand === 'number') return;
        throw new RuntimeError(operator, "Operand must be a number.");
    }

    /**
     * A helper method to check if both operands are numbers.
     */
    private checkNumberOperands(operator: Token, left: any, right: any) {
        if (typeof left === 'number' && typeof right === 'number') return;
        throw new RuntimeError(operator, "Operands must be numbers.");
    }
}
