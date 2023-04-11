// first 2 lines of code and the 11th line of code is taken from https://youtu.be/aEj0Wu33hJM?list=LL
let listItem = document.getElementById("new-item");
let output = document.getElementById("item");

// add button
let addBtn = document.getElementById("add");

addBtn.onclick = addToList;

function addToList() {
  output.innerHTML = listItem.value;
}
