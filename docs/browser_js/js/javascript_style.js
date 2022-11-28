// 버튼이 작동할 위치
let queryDisplay = document.querySelector("#display_set");
let queryVisibility = document.querySelector("#visibility_set");
let queryReset = document.querySelector("#reset");

//버튼 query
let queryDisplay_btn = document.querySelector("#display_btn");
let queryVisibility_btn = document.querySelector("#visibility_btn");
let queryReset_btn = document.querySelector("#reset_btn");

//버튼별 eventListener
queryDisplay_btn.addEventListener("click", (event) => {
  displayfun(event);
});
queryVisibility_btn.addEventListener("click", (event) => {
  visibilityfun(event);
});
queryReset_btn.addEventListener("click", (event) => {
  resetfun(event);
});

//function
function displayfun(event) {
  console.log(event);
  queryDisplay.style.display = "none";
}

function visibilityfun(event) {
  console.log(event);
  queryVisibility.style.visibility = "hidden";
}

function resetfun(event) {
  queryDisplay.style.display = "block";
  queryVisibility.style.visibility = "visible";
}
