// variable declarations
let firstNum = '';
let secondNum = '';
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbers = Array.from(document.querySelectorAll(".number"));

// event listener declarations
numbers.forEach((number) => {
    number.addEventListener("click", getNumber);
});

clearBtn.addEventListener("click", clearScreen);

// function declarations
function getNumber(e) {
    firstNum += e.target.textContent;
    display.textContent = firstNum;
}

function clearScreen() {
    display.textContent = '';
    firstNum = '';
    secondNum = '';
}