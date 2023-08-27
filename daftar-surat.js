// add-btn
const addBtn = document.getElementsByClassName(".add-btn");
const formBox = document.getElementsByClassName(".form-box");
const cancelBtn = document.getElementById("#cancel");

addBtn.addEventListener("click", () => {
  formBox.classList.add("active");
});
cancelBtn.addEventListener("click", () => {
  formBox.classList.remove("active");
});
