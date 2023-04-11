const textIn = document.getElementById("text-insert");
const addbtn = document.getElementById("add");
const textOut = document.getElementById("text-out");

function listItem() {
  textOut.innerHTML = textIn.value;
}

addbtn.addEventListener("click", listItem);
