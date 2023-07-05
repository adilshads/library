let library = {
  books: [],
  movies: [],
  tvShows: [],
  podcasts: []
};

function Book(title, author, pages, image, link) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.image = image;
  this.link = link;
}

function Movie(title, director, duration, image, link) {
  this.title = title;
  this.director = director;
  this.duration = duration;
  this.image = image;
  this.link = link;
}

function TVShow(title, creator, seasons, image, link) {
  this.title = title;
  this.creator = creator;
  this.seasons = seasons;
  this.image = image;
  this.link = link;
}

function Podcast(title, host, episodes, image, link) {
  this.title = title;
  this.host = host;
  this.episodes = episodes;
  this.image = image;
  this.link = link;
}

function addItemToLibrary(category) {
  let newItem;
  let categoryPrompt;
  let categoryArray;

  switch (category) {
    case "books":
      categoryPrompt = "Enter the book title:";
      categoryArray = library.books;
      newItem = Book;
      break;
    case "movies":
      categoryPrompt = "Enter the movie title:";
      categoryArray = library.movies;
      newItem = Movie;
      break;
    case "tvShows":
      categoryPrompt = "Enter the TV show title:";
      categoryArray = library.tvShows;
      newItem = TVShow;
      break;
    case "podcasts":
      categoryPrompt = "Enter the podcast title:";
      categoryArray = library.podcasts;
      newItem = Podcast;
      break;
    default:
      return;
  }

  const title = prompt(categoryPrompt);
  const creator = prompt("Enter the creator/director/host:");
  let details = null;

  switch (category) {
    case "books":
      let author = prompt("Enter the author's name:");
      let pages = prompt("Enter the number of pages:");
      const bookImage = prompt("Enter the image URL or leave it empty to skip:");
      const bookLink = prompt("Enter the link where the user can find the book (optional):");

      // Validate and convert pages to an integer
      while (!Number.isInteger(Number(pages))) {
        pages = prompt("Invalid input. Please enter the number of pages as an integer:");
      }
      pages = parseInt(pages);

      details = new newItem(title, author, pages, bookImage, bookLink);
      break;
    case "movies":
      let director = prompt("Enter the director's name:");
      let duration = prompt("Enter the duration (in minutes):");
      const movieImage = prompt("Enter the image URL or leave it empty to skip:");
      const movieLink = prompt("Enter the link where the user can find the movie (optional):");

      // Validate and convert duration to an integer
      while (!Number.isInteger(Number(duration))) {
        duration = prompt("Invalid input. Please enter the duration as an integer (in minutes):");
      }
      duration = parseInt(duration);

      details = new newItem(title, director, duration, movieImage, movieLink);
      break;
    case "tvShows":
      let showCreator = prompt("Enter the TV show creator's name:");
      let seasons = prompt("Enter the number of seasons:");
      const showImage = prompt("Enter the image URL or leave it empty to skip:");
      const showLink = prompt("Enter the link where the user can find the TV show (optional):");

      // Validate and convert seasons to an integer
      while (!Number.isInteger(Number(seasons))) {
        seasons = prompt("Invalid input. Please enter the number of seasons as an integer:");
      }
      seasons = parseInt(seasons);

      details = new newItem(title, showCreator, seasons, showImage, showLink);
      break;
    case "podcasts":
      let host = prompt("Enter the podcast host's name:");
      let episodes = prompt("Enter the number of episodes:");
      const podcastImage = prompt("Enter the image URL or leave it empty to skip:");
      const podcastLink = prompt("Enter the link where the user can find the podcast (optional):");

      // Validate and convert episodes to an integer
      while (!Number.isInteger(Number(episodes))) {
        episodes = prompt("Invalid input. Please enter the number of episodes as an integer:");
      }
      episodes = parseInt(episodes);

      details = new newItem(title, host, episodes, podcastImage, podcastLink);
      break;
    default:
      return;
  }

  categoryArray.push(details);

  displayLibrary();
}

function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; // Clear previous content

  // Iterate through each category in the library
  for (const category in library) {
    if (library.hasOwnProperty(category)) {
      const categoryArray = library[category];

      // Create a heading for the category
      const categoryHeading = document.createElement("h2");
      categoryHeading.textContent = category;
      libraryDiv.appendChild(categoryHeading);

      // Create HTML elements for each item in the category
      for (let i = 0; i < categoryArray.length; i++) {
        const item = categoryArray[i];
        const itemDiv = document.createElement("div");

        // Create an image element if an image URL is provided
        if (item.image) {
          const image = document.createElement("img");
          image.src = item.image;
          itemDiv.appendChild(image);
        }

        // Create a paragraph element for the item details
        const itemInfo = document.createElement("p");

        // Create a link if an item link is provided
        if (item.link) {
          const itemLink = document.createElement("a");
          itemLink.href = item.link;
          itemLink.textContent = getItemDetails(item);
          itemLink.target = "_blank";
          itemInfo.appendChild(itemLink);
        } else {
          itemInfo.textContent = getItemDetails(item);
        }

        itemDiv.appendChild(itemInfo);
        libraryDiv.appendChild(itemDiv);
      }
    }
  }
}

function getItemDetails(item) {
  let details = "";

  switch (item.constructor) {
    case Book:
      details = `${item.title} by ${item.author}, ${item.pages} pages`;
      break;
    case Movie:
      details = `${item.title} directed by ${item.director}, ${item.duration} minutes`;
      break;
    case TVShow:
      details = `${item.title} created by ${item.creator}, ${item.seasons} seasons`;
      break;
    case Podcast:
      details = `${item.title} hosted by ${item.host}, ${item.episodes} episodes`;
      break;
    default:
      break;
  }

  return details;
}
