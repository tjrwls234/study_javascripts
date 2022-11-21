// div.inner 태그 내부에 <div>hello</div>를 추가
//프로그래밍 방식 적요
let queryInner = document.querySelector("#container > .inner");
let element = document.createElement("div");
let helloText = document.createTextNode("hello");

//create Element
element.appendChild(helloText);
queryInner.appendChild(element);

//innerHtml
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");

let item = "<div class='item'>" + animal["name"] + animal["age"];
+"</div>";

item = `<div class="item">${animal["name"]} ${animal["age"]}`;
queryApp.innerHTML = item;

// 실습
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let queryList = document.querySelector("#list");
let item_prducts;
productsData.forEach((product) => {
  item_prducts = `title: ${product["title"]}, weight : ${product["weight"]} `;
  queryList.innerHTML += item_prducts + "<br>";
});
