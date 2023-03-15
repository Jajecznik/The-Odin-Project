const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const clearAll = document.querySelector('.clear');
const deleteLast = document.querySelector('.delete');
const equals = document.querySelector('.equals');
const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.operation');

let previousValue = "";
let currentValue = "";
let operationValue = "";
let check = false;

clearAll.addEventListener(
    'click', () => makeClear()
);

deleteLast.addEventListener(
    'click', () => makeDelete()
);

equals.addEventListener(
    'click', () => compute()
);

digits.forEach(digit => {
    digit.addEventListener(
        'click', () => appendDigit(digit.innerText)
    )
});

operations.forEach(operation => {
    operation.addEventListener(
        'click', () => makeOperation(operation)
    )
});

document.addEventListener(
    'keydown', (event) => {
        if (event.key >= 0 && event.key <= 9 || event.key === ".") appendDigit(event.key);
        else if (event.key === "=") compute(); 
        else if (event.key === "Delete") makeClear();
        else if (event.key === "Backspace") makeDelete();
        else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") makeOperation(event.key, true);
        else event.preventDefault();
    }
);

function makeClear() {
    previousValue = "";
    currentValue = "";
    operationValue = "";
    check = false;

    previous.innerText = "";
    current.innerText = "";
}

function makeDelete() {
    if (currentValue !== "") {
        currentValue = currentValue.slice(0, -1);
        current.innerText = currentValue;
    }
}

function appendDigit(digit) {
    if (currentValue.length === 15) return;
    if (digit === "0" && currentValue === "0") return;
    if (digit === "." && currentValue === "") return;
    if (digit === "." && currentValue.includes(".")) return;
    if (currentValue === "Can't divide by 0") {
        currentValue = "";
        current.innerText = currentValue;
    }
    if (check) {
        previousValue = currentValue;
        currentValue = "";
        previous.innerText = previousValue;
        current.innerText = currentValue;
        check = false;
    }
    currentValue += digit;
    current.innerText = currentValue;
}

function makeOperation(operation, ifKey) {
    if (currentValue === "." || currentValue === "") return;
    if (operationValue !== "") {
        let p = previousValue;

        previousValue = currentValue;
        currentValue = operate(p, currentValue, operationValue);
        current.innerText = currentValue;
        if (currentValue === "Can't divide by 0") return;
        ifKey ? operationValue = operation : operationValue = operation.innerText;
        previous.innerText = ""; 
        check = true;
    }
    else {
        previousValue = currentValue;
        ifKey ? operationValue = operation : operationValue = operation.innerText;
        currentValue = "";
        previous.innerText = `${previousValue} ${operationValue}`;
    }
}

function compute() {
    if (currentValue === "" || previousValue === "" || operationValue === "") return;
    let p = previousValue;
    
    previousValue = currentValue;
    currentValue = operate(p, currentValue, operationValue);
    current.innerText = currentValue;
    if (currentValue === "Can't divide by 0") return;
    operationValue = "";
    previous.innerText = "";
    check = false;
}

function operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        previousValue = "";
        currentValue = "";
        operationValue = "";

        previous.innerText = "";
        return "Can't divide by 0"; 
    }
    return a / b;
}
