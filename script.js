let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author's name:");
  let pages = prompt("Enter the number of pages:");

  // Validate and convert pages to an integer
  while (!Number.isInteger(Number(pages))) {
    pages = prompt("Invalid input. Please enter the number of pages as an integer:");
  }
  pages = parseInt(pages);

  // Add new book to the library from information received from the user
  const book = new Book(title, author, pages);
  myLibrary.push(book);

  displayLibrary();
}

function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; // Clear previous content

  // Create HTML elements for each book in the library
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookDiv = document.createElement("div");
    bookDiv.textContent = `BooK: ${book.title} By: ${book.author}, Pages: ${book.pages}`;
    libraryDiv.appendChild(bookDiv);
  }
}
