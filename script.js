const numbers = document.querySelectorAll(".number");
const clearButton = document.querySelector(".cancel");
const deleteButton = document.querySelector(".delete");
const operations = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");
const expression = document.querySelector(".expression");
const currentNumber = document.querySelector(".current_number");
let operation;
let previousNumber;

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
}

clearButton.addEventListener("click", () => {
    clearScreen();
});

function chooseOperation(operator) {
    if (currentNumber.innerText === "")
        return;
    previousNumber = currentNumber.innerText;
    console.log(previousNumber);
    operation = operator;
    console.log(operation);
    clearScreen();
}

operations.forEach( operator => {
    operator.addEventListener("click", () => {
        chooseOperation(operator.innerText);
    });
});

function calculateExpression() {
    let numberOne = parseFloat(previousNumber);
    let numberTwo = parseFloat(currentNumber.innerText);
    if (isNaN(numberOne) || isNaN(numberTwo))
        return;
    switch (operation) {
        case "+":
            previousNumber = numberOne + numberTwo;
            break;
        case "-":
            previousNumber = numberOne - numberTwo;
            break;
        case "*":
            previousNumber = numberOne * numberTwo;
            break;
        case "/":
            previousNumber = numberOne / numberTwo;
            break;
        default:
            break;
    }
    currentNumber.innerText = previousNumber;
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