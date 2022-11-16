//10818번 9개의 서로 다른 자연수가 주어질 때
// 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/loops_max_input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let index = 0;
let max = 0;
for (let i = 0; i < inputs.length; i++) {
  if (max < inputs[i]) {
    index = i;
    max = inputs[i];
  }
}

console.log(max);
console.log(index + 1);
