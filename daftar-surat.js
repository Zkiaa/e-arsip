// add-btn
const addBtn = document.querySelector(".add-btn");
const formBox = document.querySelector(".form-box");
const cancel = document.querySelector("#cancel");

addBtn.addEventListener("click", () => {
  formBox.classList.add("active");
});
cancel.addEventListener("click", () => {
  formBox.classList.remove("active");
});
