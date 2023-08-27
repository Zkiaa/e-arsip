// add-btn
const addBtn = document.getElementsByClassName("add-btn");
const formBox = document.getElementsByClassName("form-box");
const cancelBtn = document.getElementById("cancel");

addBtn[0].addEventListener("click", () => {
  formBox[0].classList.add("active");
});
cancelBtn.addEventListener("click", () => {
  formBox[0].classList.remove("active");
});
