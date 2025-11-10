import Calculator from "./Calculator.js";

export function run() {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const result = document.getElementById("result");

  const calculator = new Calculator();

  button.addEventListener("click", () => {
    const userInput = input.value;

    const calculateResult = calculator.calculate(userInput);

    result.innerText = `결과: ${calculateResult}`;
  });
}
