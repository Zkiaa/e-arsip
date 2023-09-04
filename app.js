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


// Sample data structure for storing mail entries (you can replace this with actual data or a backend API)
let mails = [];

// Function to render mail entries in the table
function renderMails() {
  const mailsContainer = document.getElementById("mails-container");
  mailsContainer.innerHTML = "";

  mails.forEach((mail, index) => {
    const row = document.createElement("div");
    row.classList.add("table-row");

    row.innerHTML = `
      <div class="no table-cell">${index + 1}</div>
      <div class="no-surat table-cell">${mail.noSurat}</div>
      <div class="tanggal-surat table-cell">${mail.tanggalSurat}</div>
      <div class="instansi table-cell">${mail.instansi}</div>
      <div class="disposisi table-cell">${mail.disposisi}</div>
      <div class="keterangan table-cell">${mail.keterangan}</div>
    `;

    mailsContainer.appendChild(row);
  });
}

// Function to add a new mail entry
function addMail(event) {
  event.preventDefault();

  const noSurat = document.getElementById("no-surat").value;
  const tanggalSurat = document.getElementById("tgl-surat").value;
  const instansi = document.getElementById("instansi").value;
  const disposisi = document.getElementById("disposisi").value;
  const keterangan = document.getElementById("keterangan").value;

  const newMail = {
    noSurat,
    tanggalSurat,
    instansi,
    disposisi,
    keterangan,
  };

  mails.push(newMail);
  renderMails();

  // Clear the input fields
  document.getElementById("form-mails").reset();
}

// Function to delete a mail entry
function deleteMail(event) {
  event.preventDefault();

  const noSuratToDelete = document.getElementById("no-surat-delete").value;

  // Find the index of the mail entry with the matching No Surat
  const indexToDelete = mails.findIndex(
    (mail) => mail.noSurat === noSuratToDelete
  );

  if (indexToDelete !== -1) {
    // Remove the entry from the array
    mails.splice(indexToDelete, 1);
    renderMails();

    // Clear the input field
    document.getElementById("form-mails-delete").reset();
  }
}

// Event listeners for form submission
document.getElementById("form-mails").addEventListener("submit", addMail);
document.getElementById("form-mails-delete").addEventListener("submit", deleteMail);

// Initial rendering of mail entries
renderMails();
