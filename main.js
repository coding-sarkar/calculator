// variable declarations
let firstNum = '';
let secondNum = '';
let opetator = '';
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbers = Array.from(document.querySelectorAll(".number"));
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

// event listener declarations
numbers.forEach(number => number.addEventListener("click", getNumber));
clearBtn.addEventListener("click", clearScreen);
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


// function declarations
function getNumber(e) {
    firstNum += e.target.textContent;
    display.textContent = firstNum;
}

function clearScreen() {
    display.textContent = '';
    firstNum = '';
    secondNum = '';
    opetator = '';
}