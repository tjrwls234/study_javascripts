let addTextBtn = document.querySelector("#addText-button");
let inputText = document.querySelector("#inputText");

//Add 버튼
addTextBtn.addEventListener("click", (event) => {
  addTextFunction(inputText.value);
});

//엔터
inputText.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTextFunction(inputText);
  }
});

//텍스트를 가져와서 넣는 function
function addTextFunction(text) {
  if (text == "") {
    window.alert("Please enter a task");
    return;
  }
  let item = "";
  item = `  <div class="list-box">
                    <div id="output-text">${inputText.value}</div>
                    <div class="icon">
                    <span><i class="material-icons favorite">favorite_border</i></span>
                    <span><i class="material-icons delete">delete</i></span>
                    </div>
                </div>`;

  let list = document.querySelector(".list");
  list.insertAdjacentHTML("beforeend", item);
  inputText.value = null;
}

let list = document.querySelector(".list");
list.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
  } else if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  } else {
  }
});
