let myLibrary = [];
let myMovies = [];
let myTVShows = [];
let myPodcasts = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function Movie(title, director, duration) {
  this.title = title;
  this.director = director;
  this.duration = duration;
}

function TVShow(title, creator, seasons) {
  this.title = title;
  this.creator = creator;
  this.seasons = seasons;
}

function Podcast(title, host, episodes) {
  this.title = title;
  this.host = host;
  this.episodes = episodes;
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayBooks();
  closeNewBookForm();
}

function addMovieToLibrary() {
  const title = document.getElementById('movie-title').value;
  const director = document.getElementById('director').value;
  const duration = document.getElementById('duration').value;

  const newMovie = new Movie(title, director, duration);
  myMovies.push(newMovie);

  displayMovies();
  closeNewMovieForm();
}

function addTVShowToLibrary() {
  const title = document.getElementById('show-title').value;
  const creator = document.getElementById('show-creator').value;
  const seasons = document.getElementById('seasons').value;

  const newTVShow = new TVShow(title, creator, seasons);
  myTVShows.push(newTVShow);

  displayTVShows();
  closeNewTVShowForm();
}

function addPodcastToLibrary() {
  const title = document.getElementById('podcast-title').value;
  const host = document.getElementById('host').value;
  const episodes = document.getElementById('episodes').value;

  const newPodcast = new Podcast(title, host, episodes);
  myPodcasts.push(newPodcast);

  displayPodcasts();
  closeNewPodcastForm();
}

function displayBooks() {
  const booksContainer = document.getElementById('books');
  booksContainer.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookCard = createBookCard(book, i, 'books');
    booksContainer.appendChild(bookCard);
  }
}

function displayMovies() {
  const moviesContainer = document.getElementById('movies');
  moviesContainer.innerHTML = '';

  for (let i = 0; i < myMovies.length; i++) {
    const movie = myMovies[i];
    const movieCard = createMovieCard(movie, i);
    moviesContainer.appendChild(movieCard);
  }
}

function displayTVShows() {
  const tvShowsContainer = document.getElementById('tv-shows');
  tvShowsContainer.innerHTML = '';

  for (let i = 0; i < myTVShows.length; i++) {
    const tvShow = myTVShows[i];
    const tvShowCard = createTVShowCard(tvShow, i);
    tvShowsContainer.appendChild(tvShowCard);
  }
}

function displayPodcasts() {
  const podcastsContainer = document.getElementById('podcasts');
  podcastsContainer.innerHTML = '';

  for (let i = 0; i < myPodcasts.length; i++) {
    const podcast = myPodcasts[i];
    const podcastCard = createPodcastCard(podcast, i);
    podcastsContainer.appendChild(podcastCard);
  }
}

function createBookCard(book, index, containerId) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');

  const title = document.createElement('h3');
  title.textContent = book.title;
  bookCard.appendChild(title);

  const author = document.createElement('p');
  author.textContent = 'Author: ' + book.author;
  bookCard.appendChild(author);

  const pages = document.createElement('p');
  pages.textContent = 'Pages: ' + book.pages;
  bookCard.appendChild(pages);

  const readStatus = document.createElement('p');
  readStatus.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');
  bookCard.appendChild(readStatus);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removeItemFromLibrary(index, containerId);
  });
  bookCard.appendChild(removeButton);

  const toggleReadButton = document.createElement('button');
  toggleReadButton.textContent = 'Toggle Read';
  toggleReadButton.addEventListener('click', () => {
    toggleReadStatus(index, containerId);
  });
  bookCard.appendChild(toggleReadButton);

  return bookCard;
}

function createMovieCard(movie, index) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const title = document.createElement('h3');
  title.textContent = movie.title;
  movieCard.appendChild(title);

  const director = document.createElement('p');
  director.textContent = 'Director: ' + movie.director;
  movieCard.appendChild(director);

  const duration = document.createElement('p');
  duration.textContent = 'Duration: ' + movie.duration + ' minutes';
  movieCard.appendChild(duration);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removeMovie(index);
  });
  movieCard.appendChild(removeButton);

  return movieCard;
}

function createTVShowCard(tvShow, index) {
  const tvShowCard = document.createElement('div');
  tvShowCard.classList.add('tv-show-card');

  const title = document.createElement('h3');
  title.textContent = tvShow.title;
  tvShowCard.appendChild(title);

  const creator = document.createElement('p');
  creator.textContent = 'Creator: ' + tvShow.creator;
  tvShowCard.appendChild(creator);

  const seasons = document.createElement('p');
  seasons.textContent = 'Seasons: ' + tvShow.seasons;
  tvShowCard.appendChild(seasons);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removeTVShow(index);
  });
  tvShowCard.appendChild(removeButton);

  return tvShowCard;
}

function createPodcastCard(podcast, index) {
  const podcastCard = document.createElement('div');
  podcastCard.classList.add('podcast-card');

  const title = document.createElement('h3');
  title.textContent = podcast.title;
  podcastCard.appendChild(title);

  const host = document.createElement('p');
  host.textContent = 'Host: ' + podcast.host;
  podcastCard.appendChild(host);

  const episodes = document.createElement('p');
  episodes.textContent = 'Episodes: ' + podcast.episodes;
  podcastCard.appendChild(episodes);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removePodcast(index);
  });
  podcastCard.appendChild(removeButton);

  return podcastCard;
}

function removeItemFromLibrary(index, containerId) {
  switch (containerId) {
    case 'books':
      myLibrary.splice(index, 1);
      displayBooks();
      break;
    case 'movies':
      myMovies.splice(index, 1);
      displayMovies();
      break;
    case 'tv-shows':
      myTVShows.splice(index, 1);
      displayTVShows();
      break;
    case 'podcasts':
      myPodcasts.splice(index, 1);
      displayPodcasts();
      break;
    default:
      break;
  }
}

function toggleReadStatus(index, containerId) {
  if (containerId === 'books') {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
  }
}

function removeMovie(index) {
  myMovies.splice(index, 1);
  displayMovies();
}

function removeTVShow(index) {
  myTVShows.splice(index, 1);
  displayTVShows();
}

function removePodcast(index) {
  myPodcasts.splice(index, 1);
  displayPodcasts();
}

function openNewBookForm() {
  const form = document.getElementById('new-book-form');
  form.style.display = 'block';
}

function closeNewBookForm() {
  const form = document.getElementById('new-book-form');
  form.style.display = 'none';
}

function openNewMovieForm() {
  const form = document.getElementById('new-movie-form');
  form.style.display = 'block';
}

function closeNewMovieForm() {
  const form = document.getElementById('new-movie-form');
  form.style.display = 'none';
}

function openNewTVShowForm() {
  const form = document.getElementById('new-tv-show-form');
  form.style.display = 'block';
}

function closeNewTVShowForm() {
  const form = document.getElementById('new-tv-show-form');
  form.style.display = 'none';
}

function openNewPodcastForm() {
  const form = document.getElementById('new-podcast-form');
  form.style.display = 'block';
}

function closeNewPodcastForm() {
  const form = document.getElementById('new-podcast-form');
  form.style.display = 'none';
}

// Event Listeners
document.getElementById('new-book-btn').addEventListener('click', openNewBookForm);
document.getElementById('new-movie-btn').addEventListener('click', openNewMovieForm);
document.getElementById('new-tv-show-btn').addEventListener('click', openNewTVShowForm);
document.getElementById('new-podcast-btn').addEventListener('click', openNewPodcastForm);

document.getElementById('new-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

document.getElementById('new-movie-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addMovieToLibrary();
});

document.getElementById('new-tv-show-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addTVShowToLibrary();
});

document.getElementById('new-podcast-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addPodcastToLibrary();
});
