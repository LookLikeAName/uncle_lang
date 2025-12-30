
import { Token } from "./lexer";

/**
 * The Visitor pattern is a design pattern that allows you to add new operations
 * to a set of classes without changing the classes themselves. In our case, the
 * `Expr` classes represent the structure of our code (the AST), and we want to
 * perform operations on this structure, like interpreting it. The `Visitor`
 * interface defines a `visit` method for each type of expression.
 * @template R The return type of the visit methods.
 */
export interface Visitor<R> {
    visitAssignExpr(expr: Assign): R;
    visitBinaryExpr(expr: Binary): R;
    visitCallExpr(expr: Call): R;
    visitGroupingExpr(expr: Grouping): R;
    visitLiteralExpr(expr: Literal): R;
    visitLogicalExpr(expr: Logical): R;
    visitUnaryExpr(expr: Unary): R;
    visitVariableExpr(expr: Variable): R;
    visitVectorLiteralExpr(expr: VectorLiteral): R;
    visitIndexAccessExpr(expr: IndexAccess): R;
}

/**
 * This is the base class for all expression nodes in our Abstract Syntax Tree (AST).
 * An expression is a piece of code that evaluates to a value, like `1 + 2` or `x * 3`.
 * The `accept` method is part of the Visitor pattern. It allows a visitor (like our
 * interpreter) to process the expression node.
 */
export abstract class Expr {
    abstract accept<R>(visitor: Visitor<R>): R;
}

/**
 * Similar to the `Visitor` for expressions, this is a visitor for statements.
 * A statement is a piece of code that performs an action, like declaring a variable
 * or printing a value.
 * @template R The return type of the visit methods.
 */
export interface StmtVisitor<R> {
    visitBlockStmt(stmt: Block): R;
    visitExpressionStmt(stmt: Expression): R;
    visitIfStmt(stmt: If): R;
    visitPrintStmt(stmt: Print): R;
    visitVarStmt(stmt: Var): R;
}

/**
 * This is the base class for all statement nodes in our AST.
 */
export abstract class Stmt {
    abstract accept<R>(visitor: StmtVisitor<R>): R;
}

/**
 * Represents an assignment expression, like `x = 10`.
 */
export class Assign extends Expr {
    /**
     * @param name The token for the variable being assigned to.
     * @param value The expression on the right-hand side of the `=`.
     */
    constructor(public name: Token, public value: Expr) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitAssignExpr(this);
    }
}

/**
 * Represents a binary operation, like `1 + 2` or `x > 5`.
 */
export class Binary extends Expr {
    /**
     * @param left The expression on the left side of the operator.
     * @param operator The token for the operator (`+`, `-`, `*`, `/`, etc.).
     * @param right The expression on the right side of the operator.
     */
    constructor(public left: Expr, public operator: Token, public right: Expr) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitBinaryExpr(this);
    }
}

/**
 * Represents a function call. Although we don't have user-defined functions yet,
 * this is used for built-in functions like `print`.
 */
export class Call extends Expr {
    /**
     * @param callee The expression that evaluates to the function being called.
     * @param paren The closing parenthesis token, used for error reporting.
     * @param args A list of expressions for the arguments to the function.
     */
    constructor(public callee: Expr, public paren: Token, public args: Expr[]) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitCallExpr(this);
    }
}

/**
 * Represents a grouping of expressions, like `(1 + 2)`. This is used to
 * override the default order of operations.
 */
export class Grouping extends Expr {
    /**
     * @param expression The expression inside the parentheses.
     */
    constructor(public expression: Expr) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitGroupingExpr(this);
    }
}

/**
 * Represents a literal value, like a number, string, boolean, or nil.
 */
export class Literal extends Expr {
    /**
     * @param value The actual value of the literal.
     */
    constructor(public value: any) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitLiteralExpr(this);
    }
}

/**
 * Represents a logical operation, like `a && b` or `x || y`.
 */
export class Logical extends Expr {
    /**
     * @param left The expression on the left side of the operator.
     * @param operator The token for the logical operator (`&&` or `||`).
     * @param right The expression on the right side of the operator.
     */
    constructor(public left: Expr, public operator: Token, public right: Expr) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitLogicalExpr(this);
    }
}

/**
 * Represents a unary operation, like `-5` or `!true`.
 */
export class Unary extends Expr {
    /**
     * @param operator The token for the unary operator (`-` or `!`).
     * @param right The expression to the right of the operator.
     */
    constructor(public operator: Token, public right: Expr) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitUnaryExpr(this);
    }
}

/**
 * Represents a variable expression, like `x`.
 */
export class Variable extends Expr {
    /**
     * @param name The token for the variable's name.
     */
    constructor(public name: Token) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitVariableExpr(this);
    }
}

/**
 * Represents a vector (array) literal, like `[1, 2, 3]`.
 */
export class VectorLiteral extends Expr {
    /**
     * @param values A list of expressions for the elements of the vector.
     */
    constructor(public values: Expr[]) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitVectorLiteralExpr(this);
    }
}

/**
 * Represents an index access expression, like `my_vector[0]`.
 */
export class IndexAccess extends Expr {
    /**
     * @param callee The expression that evaluates to the vector being indexed.
     * @param bracket The closing bracket token, used for error reporting.
     * @param index The expression that evaluates to the index.
     */
    constructor(public callee: Expr, public bracket: Token, public index: Expr) {
        super();
    }
    accept<R>(visitor: Visitor<R>): R {
        return visitor.visitIndexAccessExpr(this);
    }
}


/**
 * Represents a block of statements, enclosed in curly braces `{ ... }`.
 */
export class Block extends Stmt {
    /**
     * @param statements A list of statements inside the block.
     */
    constructor(public statements: Stmt[]) {
        super();
    }
    accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitBlockStmt(this);
    }
}

/**
 * Represents an expression statement. This is an expression that is used as a
 * statement, like a function call `my_function();`.
 */
export class Expression extends Stmt {
    /**
     * @param expression The expression to be executed.
     */
    constructor(public expression: Expr) {
        super();
    }
    accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitExpressionStmt(this);
    }
}

/**
 * Represents an if statement.
 */
export class If extends Stmt {
    /**
     * @param condition The condition to be evaluated.
     * @param thenBranch The statement to be executed if the condition is true.
     * @param elseBranch The statement to be executed if the condition is false (optional).
     */
    constructor(public condition: Expr, public thenBranch: Stmt, public elseBranch: Stmt | null) {
        super();
    }
    accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitIfStmt(this);
    }
}

/**
 * Represents a print statement.
 */
export class Print extends Stmt {
    /**
     * @param expression The expression whose value is to be printed.
     */
    constructor(public expression: Expr) {
        super();
    }
    accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitPrintStmt(this);
    }
}

/**
 * Represents a variable declaration statement, like `var x = 10;`.
 */
export class Var extends Stmt {
    /**
     * @param name The token for the variable's name.
     * @param initializer The expression to initialize the variable with (optional).
     */
    constructor(public name: Token, public initializer: Expr | null) {
        super();
    }
    accept<R>(visitor: StmtVisitor<R>): R {
        return visitor.visitVarStmt(this);
    }
}
