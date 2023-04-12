// all lines of code was created with the help of https://youtu.be/-pRg_daFjfk by CodeDuck, as well as the tutorial videos by Garrit

// The container that will show the user-input
let bucketList = document.getElementById("paper");

// the input field
let listItem = document.getElementById("new-item");

// add button
let addBtn = document.getElementById("add");

addBtn.onclick = addToList;

function addToList() {
  let par = document.createElement("p");
  par.innerText = listItem.value;
  bucketList.appendChild(par);

  // remove button
  par.addEventListener("click", function () {
    par.style.textDecoration;
    bucketList.removeChild(par);
  });
}
