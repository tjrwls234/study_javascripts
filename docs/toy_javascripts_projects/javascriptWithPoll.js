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
  },
  {
    questions_uid: "Q4",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
  },
  { questions_uid: "Q2", questions: "주문시 직원은 고객님께 친절 하였습니까?" },
  {
    questions_uid: "Q5",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
  },
  {
    questions_uid: "Q3",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
  },
];
// - 설문 답항 대한 사항 - [{답항}, {답항}, {답항}]
let example_list = [
  { example_uid: "E1", answer: "(1)전혀 아니다." },
  { example_uid: "E2", answer: "(2)아니다." },
  { example_uid: "E3", answer: "(3)보통이다." },
  { example_uid: "E4", answer: "(4)그렇다." },
  { example_uid: "E5", answer: "(5)매우 그렇다." },
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
  { questions_uid: "Q1", example_uid_count: 3 },
  { questions_uid: "Q2", example_uid_count: 4 },
  { questions_uid: "Q3", example_uid_count: 2 },
  { questions_uid: "Q4", example_uid_count: 5 },
  { questions_uid: "Q5", example_uid_count: 3 },
];
// function
// inputs function
let input_fun = (num) => {
  console.log(`답: ${inputs[num]}\n`);
};

//답항 출력 function
let print_example = (example_uid_count) => {
  let add = "";
  for (let i = 0; i < example_uid_count; i++) {
    add += example_list[i]["answer"] + " ";
  }
  return add;
};

// question 출력
let print_question = (question_uid, example_uid_count) => {
  for (question of questions_uid) {
    if (question["questions_uid"] === question_uid) {
      console.log(question["questions"]);
      console.log(print_example(example_uid_count));
      console.log(" ");
      input_fun(num);
      num++;
    }
  }
};

// 출력
//question_uid 받기
let num = 0;
answers.forEach((answer) => {
  let question_uid = answer["questions_uid"];
  let example_uid_count = answer["example_uid_count"];

  print_question(question_uid, example_uid_count);
});
