/**
 * This enum defines all the different types of tokens that our language recognizes.
 * A token is the smallest unit of code that has meaning, like a number, an operator,
 * or a keyword.
 */
export enum TokenType {
    // Literals: represent raw data values in the code.
    Number,      // e.g., 123, 45.67
    String,      // e.g., "hello"
    Identifier,  // e.g., my_variable
    Boolean,     // true or false

    // Keywords: words with special meaning in the language.
    If,          // 如果
    ElseIf,      // 也可能
    Else,        // 不然就
    True,        // 真的
    False,       // 假的
    Var,         // 跟你說

    // Operators: symbols that perform operations on data.
    Plus,          // 加上
    Minus,         // 減掉
    Asterisk,      // 乘
    Slash,         // 除
    Percent,       // 取餘數
    Equal,         // 是
    EqualEqual,    // 等於
    Bang,          // ❌
    BangEqual,     // ❌等於
    Less,          // 小於
    LessEqual,     // 小於等於
    Greater,       // 大於
    GreaterEqual,  // 大於等於
    And,           // 而且
    Or,            // 或是

    // Punctuation: characters that structure the code.
    LeftParen,     // 👉
    RightParen,    // 👈
    LeftBrace,     // 👆
    RightBrace,    // 👇
    LeftBracket,   // 🤜
    RightBracket,  // 🤛
    Comma,         // 🌟
    Semicolon,     // 💦
    Print,         // 🥰
    Greet,         // ❤...❤

    // End of File: a special token to mark the end of the source code.
    EOF,
}

/**
 * This interface defines the structure of a Token. Each token has a type,
 * the original text from the source code (lexeme), an optional literal value
 * (for numbers, strings, etc.), and the line number where it appeared, which
 * is useful for error reporting.
 */
export interface Token {
    type: TokenType;
    lexeme: string;
    literal?: any;
    line: number;
}

/**
 * The Lexer (or scanner) is responsible for taking the raw source code as a string
 * and breaking it down into a series of tokens.
 */
export class Lexer {
    private source: string;
    private tokens: Token[] = [];
    private start = 0;
    private current = 0;
    private line = 1;

    /**
     * A map of all the keywords in the language and their corresponding token types.
     */
    private static readonly keywords: { [key: string]: TokenType } = {
        "如果": TokenType.If,
        "也可能": TokenType.ElseIf,
        "不然就": TokenType.Else,
        "真的": TokenType.True,
        "假的": TokenType.False,
        "是": TokenType.Equal,
        "等於": TokenType.EqualEqual,
        "❌等於": TokenType.BangEqual,
        "小於": TokenType.Less,
        "大於": TokenType.Greater,
        "小於等於": TokenType.LessEqual,
        "大於等於": TokenType.GreaterEqual,
        "而且": TokenType.And,
        "或是": TokenType.Or,
        "加上": TokenType.Plus,
        "減掉": TokenType.Minus,
        "乘": TokenType.Asterisk,
        "除": TokenType.Slash,
        "取餘數": TokenType.Percent,
        "跟你說": TokenType.Var,
    };

    /**
     * A map of all the single-character/emoji tokens in the language.
     * This makes it easy to add new emoji tokens in the future.
     */
    private static readonly emojiTokens: { [key: string]: TokenType } = {
        '👉': TokenType.LeftParen,
        '👈': TokenType.RightParen,
        '👆': TokenType.LeftBrace,
        '👇': TokenType.RightBrace,
        '🤜': TokenType.LeftBracket,
        '🤛': TokenType.RightBracket,
        '🌟': TokenType.Comma,
        '💦': TokenType.Semicolon,
        '🥰': TokenType.Print,
        '❌': TokenType.Bang,
    };

    private static readonly greetingParens = ['❤', '😘', '🥺', '😈', '😥', '💏'];

    // A combined list of all multi-character symbols to prevent them from being parsed as identifiers.
    private static readonly specialSymbols = [
        ...Object.keys(Lexer.emojiTokens),
        ...Lexer.greetingParens,
        '🤗',
        ' ', '\r', '\t', '\n', '\0'
    ];

    constructor(source: string) {
        this.source = source;
    }

    /**
     * This is the main method of the lexer. It scans the source code character
     * by character and generates a list of tokens.
     * @returns An array of tokens.
     */
    scanTokens(): Token[] {
        while (!this.isAtEnd()) {
            // We are at the beginning of the next lexeme.
            this.start = this.current;
            this.scanToken();
        }

        // Add a final "end of file" token to mark the end of the code.
        this.tokens.push({ type: TokenType.EOF, lexeme: "", line: this.line });
        return this.tokens;
    }

    /**
     * Checks if we have consumed all the characters in the source code.
     */
    private isAtEnd(): boolean {
        return this.current >= this.source.length;
    }

    /**
     * Scans a single token from the source code.
     */
    private scanToken(): void {
        this.skipWhitespace();
        this.start = this.current;

        if (this.isAtEnd()) return;

        const remaining = this.source.substring(this.current);

        // Priority 1: Greetings (e.g., ❤...❤)
        for (const paren of Lexer.greetingParens) {
            if (remaining.startsWith(paren)) {
                this.greeting(paren);
                return;
            }
        }

        // Priority 2: Strings (e.g., 🤗...🤗)
        if (remaining.startsWith('🤗')) {
            this.string();
            return;
        }

        // Priority 3: Multi-character keywords (must be checked before single emoji tokens)
        // Check keywords that might start with emoji characters
        for (const keyword in Lexer.keywords) {
            if (remaining.startsWith(keyword)) {
                this.current += keyword.length;
                this.addToken(Lexer.keywords[keyword]);
                return;
            }
        }

        // Priority 4: Single emoji tokens (e.g., 👉, 💦, 🥰, ❌)
        for (const lexeme in Lexer.emojiTokens) {
            if (remaining.startsWith(lexeme)) {
                this.current += lexeme.length;
                this.addToken(Lexer.emojiTokens[lexeme]);
                return;
            }
        }

        const c = this.peek();
        // Priority 5: Numbers
        if (this.isDigit(c)) {
            this.number();
            return;
        }

        // Priority 6: Identifiers and keywords
        if (this.isAlpha(c)) {
            this.identifier();
            return;
        }

        // If we've gotten this far, we don't know what this character is.
        // In a real compiler, we'd report an error. Here, we'll just consume
        // it to prevent an infinite loop.
        this.advance();
    }

    private skipWhitespace(): void {
        while (true) {
            const c = this.peek();
            switch (c) {
                case ' ':
                case '\r':
                case '\t':
                    this.advance();
                    break;
                case '\n':
                    this.line++;
                    this.advance();
                    break;
                default:
                    return;
            }
        }
    }

    /**
     * Consumes the current character in the source and returns it.
     */
    private advance(): string {
        return this.source.charAt(this.current++);
    }

    /**
     * Creates a new token for the current lexeme.
     * @param type The type of the token.
     * @param literal The literal value of the token (optional).
     */
    private addToken(type: TokenType, literal?: any): void {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push({ type, lexeme: text, literal, line: this.line });
    }

    /**
     * Checks if the current character matches the expected character. If it does,
     * it consumes the character and returns true. Otherwise, it returns false.
     * @param expected The character to match.
     */
    private match(expected: string): boolean {
        if (this.isAtEnd()) return false;
        if (this.source.charAt(this.current) !== expected) return false;

        this.current++;
        return true;
    }

    /**
     * Looks at the current character without consuming it.
     */
    private peek(): string {
        if (this.isAtEnd()) return '\0';
        return this.source.charAt(this.current);
    }

    private greeting(paren: string): void {
        // Consume the opening paren
        this.current += paren.length;

        // Look for any greeting paren as the closing delimiter
        while (!this.isAtEnd()) {
            const remaining = this.source.substring(this.current);
            let foundClosing = false;
            
            for (const closingParen of Lexer.greetingParens) {
                if (remaining.startsWith(closingParen)) {
                    foundClosing = true;
                    // The value between the parens
                    const value = this.source.substring(this.start + paren.length, this.current);
                    
                    // Consume the closing paren
                    this.current += closingParen.length;
                    
                    this.addToken(TokenType.Greet, value);
                    return;
                }
            }
            
            if (!foundClosing) {
                if (this.peek() === '\n') this.line++;
                this.advance();
            }
        }

        // Unterminated greeting - reached end of file
    }

    /**
     * Scans a string literal.
     */
    private string(): void {
        // Consume the opening '🤗'
        this.current += '🤗'.length;

        while (!this.isAtEnd() && !this.source.substring(this.current).startsWith('🤗')) {
            if (this.peek() === '\n') this.line++;
            this.advance();
        }

        if (this.isAtEnd()) {
            // Unterminated string.
            return;
        }

        // The closing '🤗'.
        const value = this.source.substring(this.start + '🤗'.length, this.current);
        
        // Consume the closing '🤗'
        this.current += '🤗'.length;
        
        this.addToken(TokenType.String, value);
    }

    /**
     * Checks if a character is a digit.
     */
    private isDigit(c: string): boolean {
        return c >= '0' && c <= '9';
    }

    /**
     * Scans a number literal.
     */
    private number(): void {
        while (this.isDigit(this.peek())) this.advance();

        // Look for a fractional part.
        if (this.peek() === '.' && this.isDigit(this.peekNext())) {
            // Consume the "."
            this.advance();

            while (this.isDigit(this.peek())) this.advance();
        }

        this.addToken(TokenType.Number, parseFloat(this.source.substring(this.start, this.current)));
    }

    /**
     * Looks at the character after the current one without consuming it.
     */
    private peekNext(): string {
        if (this.current + 1 >= this.source.length) return '\0';
        return this.source.charAt(this.current + 1);
    }

    /**
     * Scans an identifier or a keyword.
     */
    private identifier(): void {
        while (this.isAlphaNumeric(this.peek())) this.advance();

        const text = this.source.substring(this.start, this.current);
        let type = Lexer.keywords[text];
        if (type === undefined) type = TokenType.Identifier;
        this.addToken(type);
    }

    /**
     * Checks if a character is a valid start for an identifier.
     * In "Uncle Lang", this is any character that is not a digit and not
     * a special symbol used for other tokens.
     */
    private isAlpha(c: string): boolean {
        const specialChars = "👉👈👆👇🤜🤛🌟🥰❌🤗❤😘🥺😈😥💏💦 \r\t\n";
        return c !== '\0' && !this.isDigit(c) && !specialChars.includes(c);
    }

    /**
     * Checks if a character can be part of an identifier.
     */
    private isAlphaNumeric(c: string): boolean {
        return this.isAlpha(c) || this.isDigit(c);
    }
}
