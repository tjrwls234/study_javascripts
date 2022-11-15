const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input1.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 1330 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

if (inputs[0] < inputs[1]) {
  console.log(`<`);
} else if (inputs[0] > inputs[1]) {
  console.log(`>`);
} else {
  console.log(`==`);
}

// 9498 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

if (inputs[0] >= 90) {
  console.log(`A`);
} else if (inputs[0] >= 80) {
  console.log(`B`);
} else if (inputs[0] >= 70) {
  console.log(`C`);
} else if (inputs[0] >= 60) {
  console.log(`D`);
} else {
  console.log(`F`);
}

// 2753 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

if ((inputs[0] % 4 == 0 && inputs[0] % 100 != 0) || inputs[0] % 400 == 0) {
  console.log(`1`);
} else {
  console.log(`0`);
}

// 14681 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오

if (inputs[0] > 0 && inputs[1] > 0) {
  console.log(`1`);
} else if (inputs[0] < 0 && inputs[1] > 0) {
  console.log(`2`);
} else if (inputs[0] < 0 && inputs[1] < 0) {
  console.log(`3`);
} else if (inputs[0] > 0 && inputs[1] < 0) {
  console.log(`4`);
} else {
}
