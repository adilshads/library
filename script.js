let myLibrary = [];

function Book(title, author, pages, image, link) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.image = image;
  this.link = link;
}

function addBookToLibrary() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author's name:");
  let pages = prompt("Enter the number of pages:");
  const image = prompt("Enter the image URL or leave it empty to skip:");
  const link = prompt("Enter the link where the user can find the book (optional):");

  // Validate and convert pages to an integer
  while (!Number.isInteger(Number(pages))) {
    pages = prompt("Invalid input. Please enter the number of pages as an integer:");
  }
  pages = parseInt(pages);

  // Add new book to the library from information received from the user
  const book = new Book(title, author, pages, image, link);
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

    // Create an image element if an image URL is provided
    if (book.image) {
      const image = document.createElement("img");
      image.src = book.image;
      bookDiv.appendChild(image);
    }

    // Create a paragraph element for the book details
    const bookInfo = document.createElement("p");

    // Create a link if a book link is provided
    if (book.link) {
      const bookLink = document.createElement("a");
      bookLink.href = book.link;
      bookLink.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
      bookLink.target = "_blank";
      bookInfo.appendChild(bookLink);
    } else {
      bookInfo.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
    }

    bookDiv.appendChild(bookInfo);
    libraryDiv.appendChild(bookDiv);
  }
}
