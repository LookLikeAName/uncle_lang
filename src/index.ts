import "./styles.css";
import { Lexer } from "./interpreter/lexer";
import { Parser } from "./interpreter/parser";
import { Interpreter } from "./interpreter/interpreter";

const messageDisplay = document.getElementById("message-display") as HTMLDivElement;
const messageInput = document.getElementById("message-input") as HTMLInputElement;
const sendButton = document.getElementById("send-button") as HTMLButtonElement;

function appendMessage(text: string, sender: 'user' | 'bot') {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", `${sender}-message`);
    messageElement.textContent = text;
    messageDisplay.appendChild(messageElement);
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}

function run(source: string) {
    const interpreter = new Interpreter((message: string) => {
        appendMessage(message, 'bot');
    });
    const lexer = new Lexer(source);
    const tokens = lexer.scanTokens();
    console.log(tokens);
    const parser = new Parser(tokens);
    const statements = parser.parse();

    // Stop if there was a syntax error.
    if (parser.errors.length > 0) {
        parser.errors.forEach(error => appendMessage(error, 'bot'));
        return;
    }

    console.log("AST:", statements);
    interpreter.interpret(statements);
}

sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    if (message.trim() !== "") {
        appendMessage(message, 'user');
        run(message);
        messageInput.value = "";
    }
});

messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Prevent new line in textarea
        sendButton.click();
    }
});


