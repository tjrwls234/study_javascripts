let addTextBtn = document.querySelector("#addText-button");
let inputText = document.querySelector("#inputText");

//Add 버튼
addTextBtn.addEventListener("click", (event) => {
  addTextFunction(inputText.value);
});

//엔터
inputText.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    addTextFunction(inputText.value);
  }
});

//텍스트를 가져와서 넣는 function
function addTextFunction(text) {
  if (text == "") {
    window.alert("Please enter a task");
    return;
  }
  let item;
  item = `  <div class="list-box">
                    <div id="output-text">${inputText.value}</div>
                    <div class="icon">
                    <span><i class="material-icons favorite">favorite</i></span>
                    <span><i class="material-icons delete">delete</i></span>
                    </div>
                </div>`;

  let list = document.querySelector(".list");
  list.insertAdjacentHTML("beforeend", item);
  inputText.value = null;
}

let list = document.querySelector(".list");
list.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite") {
    if (event.target.style.color != "red") {
      event.target.style.color = "red";
    } else {
      event.target.style.color = "gray";
    }
  }

  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});
