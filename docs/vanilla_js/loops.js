const animals = ["dog", "cat", "bird", "fish", "lizard"];

//Normal
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

//for iterable
for (let animal of animals) {
  console.log(`${animal}`);
}

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
  cars[0];
}

// forEach
const array1 = ["a", "b", "c"];

array1.forEach((element, i) => console.log(element));

//Arrow Function
let arrowFunction = (element, index) => {
  console.log(`${element}, index ${index}`);
};
array1.forEach(arrowFunction);

//Normal Function
function normalFunction(element) {
  console.log(element);
}
array1.forEach(normalFunction);
