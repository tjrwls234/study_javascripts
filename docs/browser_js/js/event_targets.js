let querysingle = document.querySelector("#single");
// querysingle.addEventListener("double-click", singleEvent);
querysingle.addEventListener("click", (event) => {
  singleEvent;
});

function singleEvent(event) {
  console.log(event);
  querysingle.innerHTML = "Take One Event!";
}
