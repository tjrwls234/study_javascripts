const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input1.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

console.log(inputs[0] + inputs[1]);
console.log(inputs[0] - inputs[1]);
console.log(inputs[0] * inputs[1]);
console.log(Math.floor(inputs[0] / inputs[1]));
console.log(inputs[0] % inputs[1]);

let num1 = 7;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
