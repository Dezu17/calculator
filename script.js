const numbers = document.querySelectorAll(".number");
const clearButton = document.querySelector(".cancel");
const deleteButton = document.querySelector(".delete");
const operations = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");
const expression = document.querySelector(".expression");
const currentNumber = document.querySelector(".current_number");
let operation;
let result;

function addToNumber(number) {
    if (number === "." && currentNumber.innerText.includes("."))
        return;
    else {
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
    currentNumber.innerText = "";
    expression.innerText = "";
}

clearButton.addEventListener("click", () => {
    clearScreen();
});

function chooseOperation(operator) {
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
    let numberOne = parseFloat(expression.innerText);
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
}

equalsButton.addEventListener("click", () => {
    calculateExpression();
});

function deleteLastDigit() {
    if (currentNumber.innerText.length == 1 || currentNumber.innerText.length == 0)
        currentNumber.innerText = "";
    else
        currentNumber.innerText = currentNumber.innerText.slice(0, currentNumber.innerText.length - 1);
}

deleteButton.addEventListener("click", () => {
    deleteLastDigit();
});