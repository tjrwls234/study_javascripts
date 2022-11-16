//10818번 N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split(",");
let num = parseInt(input[0]);
let inputs = input[1].trim().split(" ").map(Number);

let min_max = { min: 1000000, max: -1000000 };
for (let i = 0; i < inputs.length; i++) {
  if (min_max.min > inputs[i]) {
    min_max.min = inputs[i];
  }
  if (min_max.max < inputs[i]) {
    min_max.max = inputs[i];
  }
}

console.log(`${min_max.min} ${min_max.max}`);
