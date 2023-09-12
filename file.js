let currentInput = "";
let currentOperation = "";
let firstValue = "";

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    currentInput += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = "";
    currentOperation = "";
    firstValue = "";
}

function calculate() {
    let secondValue = parseFloat(currentInput);
    if (currentOperation && firstValue !== "") {
        switch(currentOperation) {
            case '+':
                currentInput = (parseFloat(firstValue) + secondValue).toString();
                break;
            case '-':
                currentInput = (parseFloat(firstValue) - secondValue).toString();
                break;
            case '*':
                currentInput = (parseFloat(firstValue) * secondValue).toString();
                break;
            case '/':
                if (secondValue !== 0) {
                    currentInput = (parseFloat(firstValue) / secondValue).toString();
                } else {
                    currentInput = "Error";
                }
                break;
            default:
                break;
        }
        document.getElementById('display').value = currentInput;
        currentOperation = "";
        firstValue = currentInput;
    } else {
        firstValue = currentInput;
    }
}

function setOperation(op) {
    if (currentInput) {
        if (!firstValue) {
            firstValue = currentInput;
        } else {
            calculate();
        }
        currentOperation = op;
        currentInput = "";
        document.getElementById('display').value += op;
    }
}

document.querySelectorAll('button').forEach(button => {
    if(['+', '-', '*', '/'].includes(button.innerText)) {
        button.addEventListener('click', () => setOperation(button.innerText));
    }
});
