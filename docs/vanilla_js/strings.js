let number_first = 3;
let string_second = "5";
console.log(number_first + string_second);
// recommanded this way
let concate_string = `${number_first}${string_second}`;

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);
animal.substring(0, 3);
animal.replace("ti", "TI");
animal.toUpperCase();
animal.split("");
animal.charAt(0);
console.log();

let sentance = "5 2 6";
let trims = sentance.trim(); // 공백제거
let splits = trims.split(" "); //공백으로 배열 만듬
let maps = splits.map(Number); //각 배열을 String To Number
// split
console.log(maps[0] + maps[1] + maps[2]); //합산함

let inputs = sentance.trim().split(" ").map(Number); // 체인 펀션
console.log(inputs[0] + inputs[1] + inputs[2]); //합산함
console.log();
