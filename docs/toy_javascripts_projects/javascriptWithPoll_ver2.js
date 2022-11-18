// 화면정의서 대로 출력
// - datatypes : Array, Object
// - functions : 3개 만들기
// - 답변은 미리 file에 저장된 것을 사용

// 입력
// - 문항 사항 (object in Array) - [{문항}, {문항}, {문항}]
let questions_uid = [
  {
    questions_uid: "Q1",
    questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
    orders: 1,
  },
  {
    questions_uid: "Q4",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    orders: 4,
  },
  {
    questions_uid: "Q2",
    questions: "주문시 직원은 고객님께 친절 하였습니까?",
    orders: 2,
  },
  {
    questions_uid: "Q5",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    orders: 5,
  },
  {
    questions_uid: "Q3",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    orders: 3,
  },
];

// - 설문 답항 대한 사항 - [{답항}, {답항}, {답항}]
let example_list = [
  { example_uid: "E5", answer: "(5)매우 그렇다.", orders: 5 },
  { example_uid: "E1", answer: "(1)전혀 아니다.", orders: 1 },
  { example_uid: "E4", answer: "(4)그렇다.", orders: 4 },
  { example_uid: "E2", answer: "(2)아니다.", orders: 2 },
  { example_uid: "E3", answer: "(3)보통이다.", orders: 3 },
];

// - 답변에 대한 사항 - [1,2,4,3] - file(하드코딩 x)
const fs = require("fs");

const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/toy_javascripts_projects/inputs.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 처리
// 문항, 설문 답항, 답변 매칭
let answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];
//function
let checkExample = (example, answer, answer_list) => {
  if (example["example_uid"] == answer["example_uid"]) {
    answer_list += example["answer"] + " ";
  }
  return answer_list;
};

let checkAnswer = (example, i) => {
  if (example["orders"] == inputs[i - 1]) {
    console.log(`${example["answer"]}`);
    console.log(" ");
  }
};

let checkQuestion = (question, i) => {
  if (question["orders"] == i) {
    console.log(`${i} : ${question["questions"]}`);

    for (example of example_list) {
      checkAnswer(example, i);
    }
  }
};

// 출력
for (let i = 1; i <= 5; i++) {
  questions_uid.forEach((question) => {
    if (question["orders"] == i) {
      console.log(`${i} : ${question["questions"]}`);
      let answer_list = "";
      for (answer of answers) {
        if (answer["questions_uid"] == question["questions_uid"]) {
          for (example of example_list) {
            answer_list = checkExample(example, answer, answer_list);
          }
        }
      }
      console.log(answer_list);
    }
  });
  console.log(`답 : ${inputs[i - 1]}`);
  console.log("");
}

console.log("--------------------- 설문자 선택 ---------------------------");
for (let i = 1; i <= 5; i++) {
  for (question of questions_uid) {
    checkQuestion(question, i);
  }
}
