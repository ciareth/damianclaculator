// script.js

let currentInput = '';
let previousInput = '';
let operation = '';
let hasStarted = false; // Flag to check if user has interacted with the calculator

function appendNumber(number) {
    if (!hasStarted) {
        currentInput = ''; // Clear display if name was shown
        hasStarted = true;
    }
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (!hasStarted) {
        currentInput = ''; // Clear display if name was shown
        hasStarted = true;
    }
    if (currentInput === '' && operator !== '%') return;
    if (previousInput !== '') calculateResult();
    operation = operator;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return;
    
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    
    let result;
    switch (operation) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': 
            if (curr === 0) {
                alert('Error: División por cero');
                clearDisplay();
                return;
            }
            result = prev / curr; break;
        case '%': result = (prev * curr) / 100; break;
        default: return;
    }
    
    currentInput = result.toString();
    operation = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    hasStarted = false;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = hasStarted ? (currentInput || previousInput || '0') : 'DAMIAN';
}
