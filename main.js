// variable declarations
let firstNum = '';
let secondNum = '';
let operator = '';
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const equalBtn = document.querySelector(".equal");

// event listener declarations
numbers.forEach(number => number.addEventListener("click", getNumber));
clearBtn.addEventListener("click", clearScreen);
operators.forEach(operator => operator.addEventListener("click", getOperator));
equalBtn.addEventListener("click", operate);

// function declarations
function getNumber(e) {
    if (operator.length === 0) {
        firstNum += e.target.textContent;
        display.textContent = firstNum;
    } else {
        display.textContent = '';
        secondNum += e.target.textContent;
        display.textContent = secondNum;
    }
    console.log(firstNum);
    console.log(secondNum);
}

function clearScreen() {
    display.textContent = '';
    firstNum = '';
    secondNum = '';
    operator = '';
}

function getOperator(e) {
    operator = e.target.textContent;
    console.log(operator);
}

function operate() {
    if (firstNum.length === 0 || secondNum.length === 0 || operator.length === 0) {
        return;
    }
    if (operator === "+") {
        add();
    } else if (operator === "-") {
        subtract();
    } else if (operator === "*"){
        multiply();
    } else if (operator === "/") {
        divide();
    }
}

function add() {
    display.textContent = `${parseInt(firstNum) + parseInt(secondNum)}`;
}

function subtract() {
    display.textContent = `${parseInt(firstNum) - parseInt(secondNum)}`;
}

function multiply() {
    display.textContent = `${parseInt(firstNum) * parseInt(secondNum)}`;
}

function divide() {
    display.textContent = `${parseInt(firstNum) / parseInt(secondNum)}`;
}