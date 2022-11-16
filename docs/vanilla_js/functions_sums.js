// 15596번
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
// 작성해야 하는 함수는 다음과 같다.

const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/functions_sums.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function sum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

console.log(sum(inputs));
