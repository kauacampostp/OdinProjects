const myLibrary = [];
const btnAddBook = document.getElementById("btnAddBook");
const modal = document.querySelector(".modal-overlay");
const modalBtnAddBook = document.getElementById("modalBtnAddBook");
const modalInputName = document.getElementById("modalInputName");
const modalInputAuthor = document.getElementById("modalInputAuthor");
const modalInputPages = document.getElementById("modalInputPages");
const modalInputCheckbox = document.getElementById("modalInputCheckbox");
const bookshelf = document.getElementById("bookshelf");
let btnRemoveBook = document.querySelectorAll(".btn-remove-book");
let btnToggleRead = document.querySelectorAll(".btn-toggle-read");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages, read) {
  const newBook = new Book(name, author, pages, read);
  console.log("Livro criado", newBook);
  myLibrary.push(newBook);
  console.log("Livro salvo na lista");

  displayBooks();
}

function displayBooks() {
  const deleteDiv = document.querySelectorAll(".book");
  deleteDiv.forEach((div) => div.remove());
  for (let book of myLibrary) {
    const div = document.createElement("div");
    const divTitle = document.createElement("div");
    const divCheckbox = document.createElement("div");
    const h3Title = document.createElement("h3");
    const h3Author = document.createElement("h3");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const spanRead = document.createElement("span");
    const spanChange = document.createElement("span");

    h3Title.textContent = `${book.title}`;
    btn.textContent = "X";
    btn.classList.add("btn-remove-book");
    btn.id = "btnRemoveBook";

    divTitle.append(h3Title, btn);
    divTitle.classList.add("div-title");

    const strongAuthor = document.createElement("strong");
    strongAuthor.textContent = "Author:";
    h3Author.textContent = "";
    h3Author.append(strongAuthor, ` ${book.author}`);

    const strongPages = document.createElement("strong");
    strongPages.textContent = "Pages:";
    span.textContent = "";
    span.append(strongPages, ` ${book.pages}`);

    const strongStatus = document.createElement("strong");
    strongStatus.textContent = "Status:";
    spanRead.textContent = "";
    spanChange.textContent = "🔁"
    spanChange.classList.add("btn-toggle-read");
    spanChange.style.cursor = "pointer";
    spanRead.append(strongStatus, ` ${book.read ? "Done" : "To Read"}`, spanChange);

    h3Title.classList.add("book-title");
    h3Author.classList.add("book-author");
    span.classList.add("book-pages");
    spanRead.classList.add("book-status");
    div.classList.add("book");
    div.dataset.id = book.id;

    div.appendChild(divTitle);
    div.appendChild(h3Author);
    div.appendChild(span);
    div.appendChild(spanRead);

    bookshelf.appendChild(div);
    console.log("Livros renderizados");
  }
  btnToggleRead = document.querySelectorAll(".btn-toggle-read");
  btnRemoveBook = document.querySelectorAll(".btn-remove-book");
  console.log(btnToggleRead);
  console.log(btnRemoveBook);
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

btnAddBook.addEventListener("click", () => {
  modal.classList.remove("ishidden");
  modalInputName.value = "";
  modalInputAuthor.value = "";
  modalInputPages.value = "";
  modalInputCheckbox.checked = false;
});

modalBtnAddBook.addEventListener("click", (e) => {
  let name = modalInputName.value.trim() || "";
  let author = modalInputAuthor.value.trim() || "";
  let pages = Number(modalInputPages.value) || 0;
  let read = modalInputCheckbox.checked;

  if (name === "" || author === "" || pages <= 0) {
    if (typeof e !== "undefined") e.preventDefault();
    alert("Nome do livro ou autor invalidos ou paginas invalidas");
    return;
  }

  modal.classList.add("ishidden");
  addBookToLibrary(name, author, pages, read);
});

bookshelf.addEventListener("click", (e) => {
  const bookDiv = e.target.closest(".book");
  if (!bookDiv) return;
  const id = bookDiv.dataset.id;

  if(e.target.classList.contains("btn-remove-book")) {
    const index = myLibrary.findIndex((b) => b.id === id);
    if (index !== -1) myLibrary.splice(index, 1);
    displayBooks();
  }

  if (e.target.classList.contains("btn-toggle-read")) {
    const book = myLibrary.find((b) => b.id === id);
    if (book) book.toggleRead();
    displayBooks();
  }

})

