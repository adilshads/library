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

  const book = new Book(title, author, pages);
  myLibrary.push(book);
}
