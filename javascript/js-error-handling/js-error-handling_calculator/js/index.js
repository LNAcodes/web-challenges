console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorElement = document.querySelector(".error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    // divide function is checking, if b === 0
    if (b === 0) {
      throw new Error("Cannot divide by zero!"); // if b === 0 > error message
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    errorElement.innerText = ""; // Hey computer, before you calculate, erase the error message!
    output.innerText = operations[operation](firstNumber, secondNumber); // Now calculate!
  } catch (error) {
    errorElement.innerText = error.message; // Hey computer, there is an error, show the error message
    console.error("Calculation error:", error);
  }
});
