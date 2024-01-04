// the lines 14-22 of code was created with the help of https://youtu.be/-pRg_daFjfk by CodeDuck, https://youtu.be/Ttf3CEsEwMQ by developedbyed, as well as the tutorial videos by Garrit.

// The container that will show the user-input
let bucketList = document.getElementById("paper");

// the input field
let listItem = document.getElementById("new-item");

// add button
let addBtn = document.getElementById("add");

addBtn.onclick = addToList;

// add bulletpoints into the list 
function addToList() {
  let par = document.createElement("p");
  par.innerText = listItem.value;
  bucketList.appendChild(par);
  
  //save to local storage 
  localStorage.setItem(listItem.value);

} 

// add a line when the task is done
  par.addEventListener("click", function () {
    par.style.textDecoration = "line-through";
    // bucketList.removeChild(par);
  });

  par.addEventListener("dblclick", function () {
    bucketList.removeChild(par);

    //remove from local storage
    localStorage.removeItem(key);
  });

