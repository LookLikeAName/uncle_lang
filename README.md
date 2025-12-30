# Uncle Lang (大叔語言) 🎭

An esoteric programming language interpreter inspired by Japanese "Ojisan Koubun" (middle-aged man speech patterns), using Traditional Chinese and emojis. The language mimics the verbose, emoji-heavy texting style stereotypically associated with middle-aged men trying to sound friendly and casual.

**大叔** (dàshū) means "uncle" in Chinese and is used as a first-person pronoun in this language, representing the speaker.

## Features

- 🎨 **Emoji-based Syntax**: Uses emojis for operators, delimiters, and structure
- 🇹🇼 **Traditional Chinese Keywords**: All keywords and operators in Traditional Chinese
- 💬 **Mandatory Greetings**: Statements require polite greetings containing "大叔" (uncle/self)
- 📝 **Core Language Features**: Variables, conditionals, expressions, vectors (arrays), and more
- 🔍 **Detailed Error Messages**: Clear feedback for syntax and grammar violations
- 🌐 **Web-based IDE**: Run code directly in your browser

## Quick Example

```uncle
😘嗨嗨，大叔來了😘 跟你說 數值 是 42💦
❤大叔問候你❤ 🥰 數值 💦
```

This declares a variable and prints it. Notice:
- Greetings wrapped in emoji parentheses: `😘...😘`, `❤...❤`
- Must contain "大叔" (uncle/self)
- `跟你說` = declare variable
- `🥰` = print
- `💦` = statement terminator (semicolon)

## Language Syntax

### Greeting Parentheses
Six emoji pairs can be used: `❤`, `😘`, `🥺`, `😈`, `😥`, `💏`

Example: `❤哈囉，大叔❤`, `😘大叔在嗎🥺` (can mix start and end)

### Keywords & Operators

| Syntax | Meaning | Type |
|--------|---------|------|
| `跟你說` | variable declaration | keyword |
| `如果` | if | keyword |
| `也可能` | else if | keyword |
| `不然就` | else | keyword |
| `真的` | true | boolean |
| `假的` | false | boolean |
| `🥰` | print | function |
| `是` | = (assignment/equals) | operator |
| `等於` | == | comparison |
| `❌等於` | != | comparison |
| `大於` | > | comparison |
| `小於` | < | comparison |
| `大於等於` | >= | comparison |
| `小於等於` | <= | comparison |
| `而且` | && (and) | logical |
| `或是` | \|\| (or) | logical |
| `加上` | + | arithmetic |
| `減掉` | - | arithmetic |
| `乘` | × | arithmetic |
| `除` | ÷ | arithmetic |
| `取餘數` | % (modulo) | arithmetic |
| `👉` `👈` | ( ) parentheses | delimiter |
| `👆` `👇` | { } braces | delimiter |
| `🤜` `🤛` | [ ] brackets | delimiter |
| `🌟` | , (comma) | separator |
| `💦` | ; (semicolon) | terminator |
| `🤗` | " (quotes) | string |

### Grammar Rules

1. **Declarations** require greeting: `😘大叔😘 跟你說 變數 是 10💦`
2. **Assignments** require greeting: `❤大叔❤ 變數 是 20💦`
3. **If statements** require greeting: `😘大叔😘 如果 👉 條件 👈 👆...👇`
4. **Print statements** require greeting: `🥺大叔🥺 🥰 變數 💦`
5. **All greetings must contain** "大叔"
6. **Blocks** and **expressions** don't require greetings

## Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm start
```

This will open http://localhost:8080 with hot reload enabled.

## Building for Production

Build the project:
```bash
npm run build
```

The compiled static files will be in the `dist/` directory.

## Project Structure

```
uncle_lang/
├── src/
│   ├── interpreter/
│   │   ├── lexer.ts           # Tokenizer
│   │   ├── parser.ts          # Grammar parser
│   │   ├── ast.ts             # Abstract Syntax Tree
│   │   ├── interpreter.ts     # Executor
│   │   └── messages.ts        # Error messages
│   ├── index.html             # HTML template
│   ├── index.ts               # Entry point
│   └── styles.css             # Styling
├── doc/
│   ├── uncle_lang_EBNF.txt    # Language grammar specification
│   └── test_cases.uncle       # Example code & test cases
├── dist/                      # Build output (generated)
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Technologies

- **TypeScript** - Type-safe language implementation
- **Webpack 5** - Module bundler
- **Recursive Descent Parser** - Hand-written parser
- **Tree-walking Interpreter** - AST-based execution

## Language Documentation

See [doc/uncle_lang_EBNF.txt](doc/uncle_lang_EBNF.txt) for the complete EBNF grammar specification.

See [doc/test_cases.uncle](doc/test_cases.uncle) for comprehensive examples and test cases.

## Acknowledgments

Inspired by Japanese "Ojisan Koubun" (おじさん構文) - the characteristic texting style of middle-aged men.

---
# Uncle Lang (大叔語言) 🎭 - 繁體中文

一個受到日本「おじさん構文」（中年大叔的說話風格）啟發的深奧程式語言直譯器，使用繁體中文和表情符號。該語言模仿了中年男性為了聽起來友好和隨意而過度使用表情符號的刻板印象。

**大叔** 在中文裡是「uncle」的意思，並在此語言中作為第一人稱代名詞，代表說話者本人。

## 特色

- 🎨 **基於表情符號的語法**：使用表情符號作為運算子、分隔符和結構。
- 🇹🇼 **繁體中文關鍵字**：所有關鍵字和運算子均為繁體中文。
- 💬 **強制問候語**：陳述句需要包含「大叔」的禮貌問候語。
- 📝 **核心語言功能**：支援變數、條件句、表達式、向量（陣列）等。
- 🔍 **詳細的錯誤訊息**：為語法和文法錯誤提供清晰的回饋。
- 🌐 **網頁版IDE**：直接在瀏覽器中運行程式碼。

## 快速範例

```uncle
😘嗨嗨，大叔來了😘 跟你說 數值 是 42💦
❤大叔問候你❤ 🥰 數值 💦
```

這段程式碼宣告了一個變數並將其印出。請注意：
- 問候語被表情符號括號包圍：`😘...😘`, `❤...❤`
- 必須包含「大叔」
- `跟你說` = 宣告變數
- `🥰` = 印出
- `💦` = 陳述句結束符（分號）

## 語言語法

### 問候語括號
可使用六種表情符號：`❤`, `😘`, `🥺`, `😈`, `😥`, `💏`

範例：`❤哈囉，大叔❤`, `😘大叔在嗎🥺` (開頭和結尾可以混用)

### 關鍵字與運算子

| 語法 | 意義 | 類型 |
|--------|---------|------|
| `跟你說` | 變數宣告 | 關鍵字 |
| `如果` | if | 關鍵字 |
| `也可能` | else if | 關鍵字 |
| `不然就` | else | 關鍵字 |
| `真的` | true | 布林值 |
| `假的` | false | 布林值 |
| `🥰` | 印出 | 函式 |
| `是` | = (賦值/等於) | 運算子 |
| `等於` | == | 比較 |
| `❌等於` | != | 比較 |
| `大於` | > | 比較 |
| `小於` | < | 比較 |
| `大於等於` | >= | 比較 |
| `小於等於` | <= | 比較 |
| `而且` | && (and) | 邏輯 |
| `或是` | \|\| (or) | 邏輯 |
| `加上` | + | 算術 |
| `減掉` | - | 算術 |
| `乘` | × | 算術 |
| `除` | ÷ | 算術 |
| `取餘數` | % (modulo) | 算術 |
| `👉` `👈` | ( ) 括號 | 分隔符 |
| `👆` `👇` | { } 大括號 | 分隔符 |
| `🤜` `🤛` | [ ] 中括號 | 分隔符 |
| `🌟` | , (逗號) | 分隔符 |
| `💦` | ; (分號) | 結束符 |
| `🤗` | " (引號) | 字串 |

### 文法規則

1. **宣告** 需要問候語: `😘大叔😘 跟你說 變數 是 10💦`
2. **賦值** 需要問候語: `❤大叔❤ 變數 是 20💦`
3. **If 條件句** 需要問候語: `😘大叔😘 如果 👉 條件 👈 👆...👇`
4. **Print 陳述句** 需要問候語: `🥺大叔🥺 🥰 變數 💦`
5. **所有問候語必須包含** "大叔"
6. **區塊** 和 **表達式** 不需要問候語

## 開發

安裝依賴套件：
```bash
npm install
```

啟動開發伺服器：
```bash
npm start
```

這將在 http://localhost:8080 啟動一個支援熱重載的開發伺服器。

## 生產環境建置

建置專案：
```bash
npm run build
```

編譯後的靜態檔案將位於 `dist/` 目錄中。


## 專案結構

```
uncle_lang/
├── src/
│   ├── interpreter/
│   │   ├── lexer.ts           # 詞法分析器
│   │   ├── parser.ts          # 語法分析器
│   │   ├── ast.ts             # 抽象語法樹
│   │   ├── interpreter.ts     # 直譯器
│   │   └── messages.ts        # 錯誤訊息
│   ├── index.html             # HTML 範本
│   ├── index.ts               # 進入點
│   └── styles.css             # 樣式
├── doc/
│   ├── uncle_lang_EBNF.txt    # 語言文法規格
│   └── test_cases.uncle       # 範例程式碼與測試案例
├── dist/                      # 建置輸出 (自動生成)
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## 技術棧

- **TypeScript** - 型別安全的語言實作
- **Webpack 5** - 模組打包工具
- **遞迴下降剖析器** - 手寫的語法分析器
- **樹狀遍歷直譯器** - 基於抽象語法樹的執行方式

## 語言文件

完整的 EBNF 文法規格請參閱 [doc/uncle_lang_EBNF.txt](doc/uncle_lang_EBNF.txt)。

詳細的範例和測試案例請參閱 [doc/test_cases.uncle](doc/test_cases.uncle)。

## 致謝

靈感來自日本的「おじさん構文」（Ojisan Koubun）——中年男性的特殊文字訊息風格。


This Project is contributed with VibeCoding.