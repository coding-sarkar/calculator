// variable declarations
let firstNum = '';
let secondNum = '';
let operator = '';
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbers = Array.from(document.querySelectorAll(".number"));
// const addBtn = document.querySelector(".add");
// const subtractBtn = document.querySelector(".subtract");
// const multiplyBtn = document.querySelector(".multiply");
// const divideBtn = document.querySelector(".divide");
const operators = Array.from(document.querySelectorAll(".operator"));

// event listener declarations
numbers.forEach(number => number.addEventListener("click", getNumber));
clearBtn.addEventListener("click", clearScreen);
operators.forEach(operator => operator.addEventListener("click", getOperator));
// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);


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
}