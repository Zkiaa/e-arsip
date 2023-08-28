// side-bar button
const addBtn = document.querySelector(".add-btn");
const formAdd = document.querySelector(".form-add");
const delBtn = document.querySelector(".del-btn");
const formDel = document.querySelector(".form-del");
const cancelBtn = document.querySelector("#cancel");
const cancelBtn1 = document.querySelector("#cancel1");

// Fungsi untuk menonaktifkan semua form
function disableAllForms() {
  formAdd.classList.remove("active");
  formDel.classList.remove("active");
}

// Ketika add-btn (tambah arsip) di klik
addBtn.addEventListener("click", () => {
  disableAllForms(); // Menonaktifkan semua form
  formAdd.classList.add("active"); // Mengaktifkan formAdd
});

// Ketika cancel button ditekan, nonaktifkan formAdd
cancelBtn.addEventListener("click", () => {
  formAdd.classList.remove("active");
});

// Ketika del-btn (hapus arsip) di klik
delBtn.addEventListener("click", () => {
  disableAllForms(); // Menonaktifkan semua form
  formDel.classList.add("active"); // Mengaktifkan formDel
});

// Ketika cancel1 button ditekan, nonaktifkan formDel
cancelBtn1.addEventListener("click", () => {
  formDel.classList.remove("active");
});
