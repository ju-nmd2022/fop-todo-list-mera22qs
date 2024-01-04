// the lines 14-22 of code was created with the help of https://youtu.be/-pRg_daFjfk by CodeDuck, https://youtu.be/Ttf3CEsEwMQ by developedbyed, as well as the tutorial videos by Garrit.

// The container that will show the user-input
let bucketList = document.getElementById("paper");

// the input field
let listItem = document.getElementById("new-item");

// add button
let addBtn = document.getElementById("add");

// // box that is unchecked, shown next to uncompleted tasks
// let finnishbtn = getElementById("unchecked");

addBtn.onclick = addToList;
// add bulletpoints into the list 

function addToList() {
  let par = document.createElement("p");
  par.innerText = listItem.value;
  bucketList.appendChild(par);

  // remove by clicking on the text
  par.addEventListener("click", function () {
    par.style.textDecoration = "line-through";
    //bucketList.removeChild(par);
  });
}