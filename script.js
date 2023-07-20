const numbers = document.querySelectorAll(".number");
const clearButton = document.querySelector(".cancel");
const deleteButton = document.querySelector(".delete");
const operations = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");
const output = document.querySelector(".output");
let operation;
let previousNumber;

function addToNumber(number) {
    if (number === "." && output.innerText.includes("."))
        return;
    else {
        output.innerText += number;
        console.log(number + " was pressed");
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
    addToNumber(number.innerText);
    });
});

function clearScreen() {
    output.innerText = "";
}

clearButton.addEventListener("click", () => {
    clearScreen();
});

function chooseOperation(operator) {
    if (output.innerText === "")
        return;
    previousNumber = output.innerText;
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
    let numberTwo = parseFloat(output.innerText);
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
    output.innerText = previousNumber;
}

equalsButton.addEventListener("click", () => {
    calculateExpression();
});