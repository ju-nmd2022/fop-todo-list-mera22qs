/*const textIn = document.getElementById("text-insert");
const addbtn = document.getElementById("add");
const textOut = document.getElementById("text-out");

function listItem() {
  textOut.innerHTML = textIn.value;
}

addbtn.addEventListener("click", listItem);*/

const form = document.getElementById("todo-input");
const taskInput = document.getElementById("task-input");

//array 

let todos = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  saveTodo();
});

function saveTodo(){
  const todoValue = taskInput.value

  const todo 
}

