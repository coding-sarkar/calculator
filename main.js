// variable declarations
let firstNum = '';
let secondNum = '';
let operator = '';
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const equalBtn = document.querySelector(".equal");
const decimalBtn = document.querySelector(".decimal");
const delBtn = document.querySelector(".del");

// event listener declarations
numbers.forEach(number => number.addEventListener("click", getNumber));
clearBtn.addEventListener("click", clearScreen);
operators.forEach(operator => operator.addEventListener("click", getOperator));
equalBtn.addEventListener("click", operate);
decimalBtn.addEventListener("click", addDecimal);
delBtn.addEventListener("click", deleteLastDigit);

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
    
}

function clearScreen() {
    display.textContent = '0';
    firstNum = '';
    secondNum = '';
    operator = '';
}

function getOperator(e) {
    if (operator.length === 1) {
        operate();
    }
    operator = e.target.textContent;
    
}

function operate() {
    console.log(`FirstNum = ${firstNum}`);
    console.log(`SecondNum = ${secondNum}`);
    console.log(`Operator = ${operator}`);
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
        if (parseFloat(secondNum) === 0) {
            alert("Can't Divide by 0! Try Different Number");
            secondNum = "";
            return;
        }
        divide();
    }
    secondNum = "";
    operator = "";
    display.textContent = firstNum;
}

function add() {
    firstNum = `${parseFloat(firstNum) + parseFloat(secondNum)}`;
}

function subtract() {
    firstNum = `${parseFloat(firstNum) - parseFloat(secondNum)}`;
}

function multiply() {
    firstNum = `${parseFloat(firstNum) * parseFloat(secondNum)}`;
}

function divide() {
    firstNum = `${parseFloat(firstNum) / parseFloat(secondNum)}`;
    if (firstNum.includes(".")) {
        firstNum = `${(parseFloat(firstNum) / parseFloat(secondNum)).toFixed(7)}`;
    }
}

function addDecimal() {
    if (operator.length === 0) {
        if (firstNum.includes(".")) return;
        firstNum += ".";
        display.textContent = firstNum;
    } else {
        if (secondNum.includes(".")) return;
        secondNum += ".";
        display.textContent = secondNum;
    }
}

function deleteLastDigit() {
    if (operator.length === 0) {
        firstNum = firstNum.slice(0, firstNum.length - 1);
        display.textContent = firstNum;
    } else {
        secondNum = secondNum.slice(0, secondNum.length - 1);
        display.textContent = secondNum;
    }
}