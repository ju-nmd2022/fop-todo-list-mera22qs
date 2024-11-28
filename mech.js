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

//The code was created with the help of videos provided by Garrit Schaap and https://www.youtube.com/watch?v=-pRg_daFjfk&t=47s by CodeDuc. ChatGTP was also used to correct errors.

// // The container that will show the user-input
// let bucketList = document.getElementById("paper");

// // the input field
// let listItem = document.getElementById("new-item");

// // add button
// let addBtn = document.getElementById("add");

// addBtn.onclick = addToList;

// // add bulletpoints into the list
// function addToList() {
//   addBtn.addEventListener('click', function(){
//   let par = document.createElement('p');
//   bucketList.appendChild(par);
// })
//   //With the help of chat gtp, the inputs of the to-fo lists are converted into keys so they can be stored in local storage.
//   // save to local storage with a consistent key format
//   localStorage.setItem("task_" + par.innerText, par.innerText);

//   // add a line when the task is done
//   par.addEventListener("click", function () {
//     par.style.textDecoration = "line-through";

//   });

//   par.addEventListener("dblclick", function () {
//     bucketList.removeChild(par);

//  //With the help of chat gtp, the inputs of the to-fo lists are converted into keys so they can be removed from local storage.
//     localStorage.removeItem("task_" + par.innerText);
//   });
// }
