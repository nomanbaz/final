function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let currentValue = document.getElementById('display').value;
  document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById('display').value;

  // Split based on the operations
  let components = expression.split(/([+\-*/])/);
  let stack = [];

  for (let i = 0; i < components.length; i++) {
      let item = components[i];
      if (item === "+" || item === "-" || item === "*" || item === "/") {
          stack.push(item);
      } else {
          if (stack.length > 0 && (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")) {
              let op = stack.pop();
              let prev = parseFloat(stack.pop());
              let current = parseFloat(item);
              if (op === "*") stack.push(prev * current);
              if (op === "/") stack.push(prev / current);
          } else {
              stack.push(parseFloat(item));
          }
      }
  }

  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
      if (stack[i] === "+") result += stack[i + 1];
      if (stack[i] === "-") result -= stack[i + 1];
  }

  document.getElementById('display').value = result;
}
