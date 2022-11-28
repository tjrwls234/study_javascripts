let querysingle = document.querySelector("#single");
// querysingle.addEventListener("double-click", singleEvent);
querysingle.addEventListener("click", (event) => {
  singleEvent(event);
});

function singleEvent(event) {
  console.log(event);
  querysingle.innerHTML = "Take One Event!";
}
