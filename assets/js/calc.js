
class Calculater {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }
  
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
  
    delete() {}
  
    appendNumber() {}
  
    chooseOperation(operation) {}
  
    copmute() {}
  
    updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        this.previousOperandTextElement.innerText = "";
      }
    }
  }
  
  const numberButtons = document.querySelectorAll("[data-number]");
  const operationButtons = document.querySelectorAll("[data-operation]");
  const equalsButton = document.querySelector("[data-equals]");
  const deleteButton = document.querySelector("[data-delete]");
  const allClearButton = document.querySelector("[data-all-clear]");
  const previousOperandTextElement = document.querySelector("[data-previous]");
  const currentOperandTextElement = document.querySelector("[data-current]");
  
  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );
  
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });
  
  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });
  
  equalsButton.addEventListener("click", (button) => {
    calculator.compute();
    calculator.updateDisplay();
  });
  
  allClearButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });
  
  deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
  });
  
  