import { Token, TokenType } from "./lexer";
import { ErrorMessages } from "./messages";
import {
    Expr,
    Stmt,
    Binary,
    Grouping,
    Literal,
    Unary,
    Variable,
    Assign,
    Logical,
    Call,
    VectorLiteral,
    IndexAccess,
    Expression,
    Print,
    Block,
    If,
    Var
} from "./ast";

/**
 * A simple error class for parsing errors.
 */
class ParseError extends Error {}

/**
 * The Parser is responsible for taking a sequence of tokens from the lexer and
 * building an Abstract Syntax Tree (AST). The AST is a tree structure that
 * represents the grammatical structure of the code. This parser uses a
 * recursive descent strategy, where each method corresponds to a rule in the
 * language's grammar.
 */
export class Parser {
    private tokens: Token[];
    private current = 0;
    public errors: string[] = [];

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    /**
     * The main entry point for the parser. It parses a sequence of statements
     * until it reaches the end of the token stream.
     * @returns An array of statements.
     */
    parse(): Stmt[] {
        const statements: Stmt[] = [];
        while (!this.isAtEnd()) {
            const stmt = this.statement();
            if (stmt) {
                statements.push(stmt);
            }
        }
        return statements;
    }

    /**
     * Parses a declaration or a statement.
     */
    private statement(): Stmt {
        try {
            // Skip greetings that act as comments (not followed by required statements)
            while (this.check(TokenType.Greet)) {
                // Peek ahead to see if this greeting is followed by a statement that requires it
                const nextToken = this.tokens[this.current + 1];
                if (nextToken && (
                    nextToken.type === TokenType.Var ||
                    nextToken.type === TokenType.If ||
                    nextToken.type === TokenType.Print ||
                    nextToken.type === TokenType.Identifier // Could be assignment
                )) {
                    // This greeting is required, consume and validate it
                    const greetToken = this.consume(TokenType.Greet, ErrorMessages.EXPECT_GREETING_AT_START);
                    
                    // Validate that the greeting contains '大叔'
                    if (!greetToken.literal || !greetToken.literal.includes('大叔')) {
                        throw this.error(greetToken, ErrorMessages.GREETING_MUST_CONTAIN_UNCLE);
                    }

                    if (this.match(TokenType.Var)) {
                        return this.varDeclaration();
                    }
                    if (this.match(TokenType.If)) {
                        return this.ifStatement();
                    }
                    if (this.match(TokenType.Print)) {
                        return this.printStatement();
                    }
                    // If it's not any of the above, it must be an assignment statement.
                    return this.assignmentStatement();
                } else {
                    // This greeting is standalone (acts as a comment), skip it
                    this.advance();
                }
            }

            // Statements that DO NOT start with a greeting
            return this.ungreetedStatement();
        } catch (error) {
            this.synchronize();
            return null;
        }
    }

    /**
     * Parses a variable declaration. Assumes 'Greet' and 'Var' tokens have been consumed.
     */
    private varDeclaration(): Stmt {
        const name = this.consume(TokenType.Identifier, ErrorMessages.EXPECT_VARIABLE_NAME);

        let initializer: Expr | null = null;
        if (this.match(TokenType.Equal)) {
            initializer = this.expression();
        }

        this.consume(TokenType.Semicolon, ErrorMessages.EXPECT_SEMICOLON_AFTER_VAR);
        return new Var(name, initializer);
    }

    /**
     * Parses statements that do not require a greeting.
     */
    private ungreetedStatement(): Stmt {
        if (this.check(TokenType.Var) || this.check(TokenType.If) || this.check(TokenType.Print)) {
            throw this.error(this.peek(), ErrorMessages.MISSING_GREETING);
        }

        // Check if this looks like an assignment (identifier followed by 是)
        if (this.check(TokenType.Identifier)) {
            // Look ahead to see if this is an assignment
            const savedCurrent = this.current;
            this.advance(); // consume identifier
            
            // Check for index access patterns: identifier🤜...🤛
            while (this.match(TokenType.LeftBracket)) {
                // Skip the index expression
                let bracketDepth = 1;
                while (bracketDepth > 0 && !this.isAtEnd()) {
                    if (this.check(TokenType.LeftBracket)) bracketDepth++;
                    if (this.check(TokenType.RightBracket)) bracketDepth--;
                    this.advance();
                }
            }
            
            const isAssignment = this.check(TokenType.Equal);
            this.current = savedCurrent; // restore position
            
            if (isAssignment) {
                throw this.error(this.peek(), ErrorMessages.MISSING_GREETING);
            }
        }

        if (this.match(TokenType.LeftBrace)) {
            return new Block(this.block());
        }

        return this.expressionStatement();
    }

    /**
     * Parses an if statement. Assumes 'Greet' and 'If' tokens have been consumed.
     */
    private ifStatement(): Stmt {
        this.consume(TokenType.LeftParen, ErrorMessages.EXPECT_LEFT_PAREN_AFTER_IF);
        const condition = this.expression();
        this.consume(TokenType.RightParen, ErrorMessages.EXPECT_RIGHT_PAREN_AFTER_CONDITION);

        const thenBranch = this.statement(); // A block can contain any declaration
        
        let elseBranch: Stmt | null = null;
        if (this.match(TokenType.ElseIf)) {
            elseBranch = this.ifStatement();
        } else if (this.match(TokenType.Else)) {
            elseBranch = this.statement();
        }

        return new If(condition, thenBranch, elseBranch);
    }

    /**
     * Parses a print statement. Assumes 'Greet' and 'Print' tokens have been consumed.
     */
    private printStatement(): Stmt {
        const value = this.expression();
        this.consume(TokenType.Semicolon, ErrorMessages.EXPECT_SEMICOLON_AFTER_VALUE);
        return new Print(value);
    }

    /**
     * Parses an assignment statement. Assumes 'Greet' token has been consumed.
     */
    private assignmentStatement(): Stmt {
        const expr = this.expression();
        // After an expression, we expect a semicolon for an expression statement,
        // but an assignment is not an expression statement in this context.
        // The 'assignment' expression parsing handles the '='.
        if (expr instanceof Assign) {
             this.consume(TokenType.Semicolon, ErrorMessages.EXPECT_SEMICOLON_AFTER_ASSIGNMENT);
             return new Expression(expr);
        }
        
        this.error(this.peek(), ErrorMessages.INVALID_ASSIGNMENT_STATEMENT);
        return null; // Should be unreachable due to error
    }

    /**
     * Parses a block of statements.
     */
    private block(): Stmt[] {
        const statements: Stmt[] = [];

        while (!this.check(TokenType.RightBrace) && !this.isAtEnd()) {
            statements.push(this.statement());
        }

        this.consume(TokenType.RightBrace, ErrorMessages.EXPECT_RIGHT_BRACE_AFTER_BLOCK);
        return statements;
    }

    /**
     * Parses an expression statement.
     */
    private expressionStatement(): Stmt {
        const expr = this.expression();
        this.consume(TokenType.Semicolon, ErrorMessages.EXPECT_SEMICOLON_AFTER_EXPRESSION);
        return new Expression(expr);
    }

    /**
     * The following methods parse expressions, following the order of precedence.
     */

    public expression(): Expr {
        return this.assignment();
    }

    private assignment(): Expr {
        const expr = this.or();

        if (this.match(TokenType.Equal)) {
            const equals = this.previous();
            const value = this.expression(); // Changed from this.assignment()

            if (expr instanceof Variable) {
                const name = expr.name;
                return new Assign(name, value);
            } else if (expr instanceof IndexAccess) {
                // This is more complex, for now we keep it simple
                this.error(equals, ErrorMessages.INVALID_ASSIGNMENT_TARGET);
            }

            this.error(equals, ErrorMessages.INVALID_ASSIGNMENT_TARGET);
        }

        return expr;
    }

    private or(): Expr {
        let expr = this.and();

        while (this.match(TokenType.Or)) {
            const operator = this.previous();
            const right = this.and();
            expr = new Logical(expr, operator, right);
        }

        return expr;
    }

    private and(): Expr {
        let expr = this.equality();

        while (this.match(TokenType.And)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new Logical(expr, operator, right);
        }

        return expr;
    }

    private equality(): Expr {
        let expr = this.comparison();

        while (this.match(TokenType.BangEqual, TokenType.EqualEqual)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    private comparison(): Expr {
        let expr = this.term();

        while (this.match(TokenType.Greater, TokenType.GreaterEqual, TokenType.Less, TokenType.LessEqual)) {
            const operator = this.previous();
            const right = this.term();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    private term(): Expr {
        let expr = this.factor();

        while (this.match(TokenType.Minus, TokenType.Plus)) {
            const operator = this.previous();
            const right = this.factor();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    private factor(): Expr {
        let expr = this.unary();

        while (this.match(TokenType.Slash, TokenType.Asterisk, TokenType.Percent)) {
            const operator = this.previous();
            const right = this.unary();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    private unary(): Expr {
        if (this.match(TokenType.Bang, TokenType.Minus)) {
            const operator = this.previous();
            const right = this.unary();
            return new Unary(operator, right);
        }

        return this.call();
    }

    private call(): Expr {
        let expr = this.primary();

        while (true) {
            if (this.match(TokenType.LeftParen)) {
                expr = this.finishCall(expr);
            } else if (this.match(TokenType.LeftBracket)) {
                expr = this.finishIndexAccess(expr);
            }
            else {
                break;
            }
        }

        return expr;
    }

    private finishCall(callee: Expr): Expr {
        const args: Expr[] = [];
        if (!this.check(TokenType.RightParen)) {
            do {
                if (args.length >= 255) {
                    this.error(this.peek(), ErrorMessages.MAX_ARGUMENTS_EXCEEDED);
                }
                args.push(this.expression());
            } while (this.match(TokenType.Comma));
        }

        const paren = this.consume(TokenType.RightParen, ErrorMessages.EXPECT_RIGHT_PAREN_AFTER_ARGUMENTS);

        return new Call(callee, paren, args);
    }

    private finishIndexAccess(callee: Expr): Expr {
        const index = this.expression();
        const bracket = this.consume(TokenType.RightBracket, ErrorMessages.EXPECT_RIGHT_BRACKET_AFTER_INDEX);
        return new IndexAccess(callee, bracket, index);
    }

    /**
     * Parses the highest-precedence expressions.
     */
    private primary(): Expr {
        if (this.match(TokenType.False)) return new Literal(false);
        if (this.match(TokenType.True)) return new Literal(true);
        if (this.match(TokenType.Number, TokenType.String)) {
            return new Literal(this.previous().literal);
        }

        if (this.match(TokenType.Identifier)) {
            return new Variable(this.previous());
        }

        if (this.match(TokenType.LeftParen)) {
            const expr = this.expression();
            this.consume(TokenType.RightParen, ErrorMessages.EXPECT_RIGHT_PAREN_AFTER_EXPRESSION);
            return new Grouping(expr);
        }

        if (this.match(TokenType.LeftBracket)) {
            return this.vectorLiteral();
        }

        throw this.error(this.peek(), ErrorMessages.EXPECT_EXPRESSION);
    }

    private vectorLiteral(): Expr {
        const values: Expr[] = [];
        if (!this.check(TokenType.RightBracket)) {
            do {
                values.push(this.expression());
            } while (this.match(TokenType.Comma));
        }
        this.consume(TokenType.RightBracket, ErrorMessages.EXPECT_RIGHT_BRACKET_AFTER_VECTOR);
        return new VectorLiteral(values);
    }

    /**
     * Checks if the current token is one of the given types. If so, it consumes
     * the token and returns true.
     */
    private match(...types: TokenType[]): boolean {
        for (const type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }

    /**
     * Checks if the current token is of the given type. If not, it throws an error.
     */
    private consume(type: TokenType, message: string): Token {
        if (this.check(type)) return this.advance();
        throw this.error(this.peek(), message);
    }

    /**
     * Checks if the current token is of the given type without consuming it.
     */
    private check(type: TokenType): boolean {
        if (this.isAtEnd()) return false;
        return this.peek().type === type;
    }

    /**
     * Consumes the current token and returns it.
     */
    private advance(): Token {
        if (!this.isAtEnd()) this.current++;
        return this.previous();
    }

    /**
     * Checks if we are at the end of the token stream.
     */
    private isAtEnd(): boolean {
        return this.peek().type === TokenType.EOF;
    }

    /**
     * Returns the current token without consuming it.
     */
    private peek(): Token {
        return this.tokens[this.current];
    }

    /**
     * Returns the previous token.
     */
    private previous(): Token {
        return this.tokens[this.current - 1];
    }

    /**
     * Reports a parsing error.
     */
    private error(token: Token, message: string): ParseError {
        // In a real compiler, you would have a more sophisticated error reporting system.
        const errorMessage = `Error at line ${token.line}: ${message}`;
        this.errors.push(errorMessage);
        console.error(errorMessage);
        return new ParseError();
    }

    /**
     * This method is used to recover from a parse error. It discards tokens until
     * it finds a statement boundary, which allows the parser to continue parsing
     * the rest of the file.
     */
    private synchronize(): void {
        this.advance();

        while (!this.isAtEnd()) {
            if (this.previous().type === TokenType.Semicolon) return;

            switch (this.peek().type) {
                case TokenType.Var:
                case TokenType.If:
                case TokenType.Print:
                    return;
            }

            this.advance();
        }
    }
}
