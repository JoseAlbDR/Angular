function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

const result = addNumbers(1, 2);
const resultArrow = addNumbersArrow(2, 3);
const multiplyResult: number = multiply(5);
console.table({ result, resultArrow, multiplyResult });

export {};
