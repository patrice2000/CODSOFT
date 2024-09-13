document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  let currentInput = "";
  let operator = "";
  let previousValue = "";

  const updateDisplay = (value) => {
    display.textContent = value || "0";
  };

  const calculate = () => {
    if (previousValue && operator && currentInput) {
      const result = eval(`${previousValue} ${operator} ${currentInput}`);
      updateDisplay(result);
      currentInput = result;
      operator = "";
      previousValue = "";
    }
  };

  const handleButtonClick = (event) => {
    const button = event.target;
    const value = button.getAttribute("data-value");

    if (button.classList.contains("btn")) {
      if (button.classList.contains("operator")) {
        if (currentInput) {
          if (operator) {
            calculate();
          }
          previousValue = currentInput;
          operator = value;
          currentInput = "";
        }
      } else if (button.classList.contains("equals")) {
        calculate();
      } else if (button.classList.contains("clear")) {
        currentInput = "";
        operator = "";
        previousValue = "";
        updateDisplay("0");
      } else {
        currentInput += value;
        updateDisplay(currentInput);
      }
    }
  };

  document
    .querySelector(".buttons")
    .addEventListener("click", handleButtonClick);
});
