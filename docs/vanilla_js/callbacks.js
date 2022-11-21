console.log(`first`);
// console.log(`second`);
// setTimeout(functionRef, delay)
// function (){

// }
setTimeout(function () {
  console.log(`setTimeout : second`);
}, 2000); // 2000초
console.log(`thrid`);

// 5+6
function plus(first, second) {
  return first + second;
}
plus(5, 6);

// 5-6
function minus(first, second) {
  return first - second;
}
minus(5, 6);

function callbackFunction(first, second, callback) {
  let result = callback(first, second);
  console.log(`result : ${result}`);
}

callbackFunction(5, 6, plus);
