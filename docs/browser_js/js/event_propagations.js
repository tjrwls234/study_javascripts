let queryInputAll = document.querySelectorAll("input");

// for (queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

let newItem = `<li>
                    <div>
                        <input type="checkbox" name="" id="item3" />
                        <label for="item3">item three</label>
                        <span>
                        <i class="material-icons delete">delete</i>
                        </span>
                    </div>
                  </li>
                    `;

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
}); //상위 element에 event 설정

// queryItemList.innerHTML += newItem;
queryItemList.insertAdjacentHTML("beforeend", newItem);

//기존 이벤트 갱신
// queryInputAll = document.querySelectorAll("input");

// for (queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
