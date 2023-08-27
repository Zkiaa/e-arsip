// side-bar button
const addBtn = document.getElementsByClassName("add-btn");
const formAdd = document.getElementsByClassName("form-add");
const delBtn = document.getElementsByClassName("del-btn");
const formDel = document.getElementsByClassName("form-del");
const cancelBtn = document.getElementById("cancel");
const cancelBtn1 = document.getElementById("cancel1");


addBtn[0].addEventListener("click", () => {
  formAdd[0].classList.add("active");
});
cancelBtn.addEventListener("click", () => {
  formAdd[0].classList.remove("active");
});
delBtn[0].addEventListener("click", () => {
  formDel[0].classList.add("active");
});
cancelBtn1.addEventListener("click", () => {
  formDel[0].classList.remove("active");
});
