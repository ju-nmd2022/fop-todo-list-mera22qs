*****************************************************************************/
*    Title: How To Create To-Do List App Using HTML CSS And JavaScript | Task App In JavaScript
*    Author: GreatStack
*    Date: 2023 
*    Code version: 2.0
*    Availability: https://www.youtube.com/watch?v=G0jO8kUrg-I&list=LL&index=4&t=1s
****************************************************************************/

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write your goal");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = `<img src="img/cross.png">`;
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

//remove and add task

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();