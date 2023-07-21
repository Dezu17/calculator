const numbers = document.querySelectorAll(".number");
const clearButton = document.querySelector(".cancel");
const deleteButton = document.querySelector(".delete");
const operations = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");
const expression = document.querySelector(".expression");
const currentNumber = document.querySelector(".current_number");
let operation;
let result;
let equalsWasJustPressed;

function addToNumber(number) {
    if (number === "." && currentNumber.innerText.includes("."))
        return;
    else {
        equalsWasJustPressed = false;
        currentNumber.innerText += number;
        console.log(number + " was pressed");
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
    addToNumber(number.innerText);
    });
});

function clearScreen() {
    equalsWasJustPressed = false;
    currentNumber.innerText = "";
    expression.innerText = "";
    operation = "";
}

clearButton.addEventListener("click", () => {
    clearScreen();
});

function isOperationSet() {
    if (operation === "+" || operation === "-" || operation === "*" || operation === "/")
        return true;
    else
        return false;
}

function chooseOperation(operator) {
    equalsWasJustPressed = false;
    if (isOperationSet())
        calculateExpression();
    if (currentNumber.innerText === "" && operator !== "-")
        return;
    else if (currentNumber.innerText === "" && operator === "-") {
        currentNumber.innerText += operator;
        return;
    }
    expression.innerText = currentNumber.innerText;
    operation = operator;
    expression.innerText += operator;
    currentNumber.innerText = "";
}

operations.forEach( operator => {
    operator.addEventListener("click", () => {
        chooseOperation(operator.innerText);
    });
});

function calculateExpression() {
    if (!equalsWasJustPressed) {
        equalsWasJustPressed = true;
        let numberOne = parseFloat(expression.innerText.slice(0, -1));
        let numberTwo = parseFloat(currentNumber.innerText);
        expression.innerText += currentNumber.innerText;
        if (isNaN(numberOne) || isNaN(numberTwo))
            return;
        switch (operation) {
            case "+":
                result = numberOne + numberTwo;
                break;
            case "-":
                result = numberOne - numberTwo;
                break;
            case "*":
                result = numberOne * numberTwo;
                break;
            case "/":
                result = numberOne / numberTwo;
                break;
            default:
                break;
        }
        currentNumber.innerText = result;
        operation = "";
    }
}

equalsButton.addEventListener("click", () => {
    calculateExpression();
});

function deleteLastDigit() {
    equalsWasJustPressed = false;
    if (currentNumber.innerText.length == 1 || currentNumber.innerText.length == 0)
        currentNumber.innerText = "";
    else
        currentNumber.innerText = currentNumber.innerText.slice(0, currentNumber.innerText.length - 1);
}

deleteButton.addEventListener("click", () => {
    deleteLastDigit();
});