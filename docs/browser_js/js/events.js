function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change on Me!";
}

let queryClickalert = document.querySelector("#clickalert");
queryClickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("click on Me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

function targetText() {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
