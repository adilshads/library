let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author's name:");
  const pages = prompt("Enter the number of pages:");

  // Validate and convert pages to an integer
  while (!Number.isInteger(Number(pages))) {
    pages = prompt("Invalid input. Please enter the number of pages as an integer:");
  }
  pages = parseInt(pages);

  // Add new book to page from information recieved from user
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}
