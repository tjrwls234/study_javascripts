function validateForm() {
  let fnamevalue = document.forms["myForm"]["fname"].value;
  if (fnamevalue == "") {
    let queryErrorId = document.querySelector("#fnameErrorId");
    queryErrorId.innerHTML = "Name Must be filled in";
    queryErrorId.style.color = "red";
    return false;
  }
  return true;
}

let btnsearch = document.querySelector("#btnsearch");
btnsearch.addEventListener("click", (event) => {
  searchForm(event);
});

function searchForm(event) {
  let searchInput = document.querySelector("#searchId");
  let searchValue = searchInput.value;
  if (searchValue < 1 || searchValue > 10) {
    text = "Input Not valid";
  } else {
    text = "Input OK!";
  }
  document.querySelector("#searchDescId").innerHTML = text;
}
