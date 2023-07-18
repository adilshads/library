let myLibrary = [];
let myMovies = [];
let myTVShows = [];
let myPodcasts = [];
let selectedImageFile = null;

function Book(title, author, pages, read, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
}

function Movie(title, director, duration, watched, image) {
  this.title = title;
  this.director = director;
  this.duration = duration;
  this.watched = watched;
  this.image = image;
}

function TVShow(title, creator, seasons, watched, image) {
  this.title = title;
  this.creator = creator;
  this.seasons = seasons;
  this.watched = watched;
  this.image = image;
}

function Podcast(title, host, episodes, completed, image) {
  this.title = title;
  this.host = host;
  this.episodes = episodes;
  this.completed = completed;
  this.image = image;
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

  if (book.image) {
    const image = document.createElement('img');
    image.src = URL.createObjectURL(book.image);
    image.alt = 'Book Cover';
    image.classList.add('book-cover');
    bookCard.appendChild(image);
  }

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

  const watchedStatus = document.createElement('p');
  watchedStatus.textContent = 'Watched: ' + (movie.watched ? 'Yes' : 'No');
  movieCard.appendChild(watchedStatus);

  if (movie.image) {
    const image = document.createElement('img');
    image.src = URL.createObjectURL(movie.image);
    image.alt = 'Movie Poster';
    image.classList.add('media-image');
    movieCard.appendChild(image);
  }

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removeMovie(index);
  });
  movieCard.appendChild(removeButton);

  const toggleWatchedButton = document.createElement('button');
  toggleWatchedButton.textContent = 'Toggle Watched';
  toggleWatchedButton.addEventListener('click', () => {
    toggleWatchedStatus(index);
  });
  movieCard.appendChild(toggleWatchedButton);

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

  const watchedStatus = document.createElement('p');
  watchedStatus.textContent = 'Watched: ' + (tvShow.watched ? 'Yes' : 'No');
  tvShowCard.appendChild(watchedStatus);

  if (tvShow.image) {
    const image = document.createElement('img');
    image.src = URL.createObjectURL(tvShow.image);
    image.alt = 'TV Show Poster';
    image.classList.add('media-image');
    tvShowCard.appendChild(image);
  }

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removeTVShow(index);
  });
  tvShowCard.appendChild(removeButton);

  const toggleWatchedButton = document.createElement('button');
  toggleWatchedButton.textContent = 'Toggle Watched';
  toggleWatchedButton.addEventListener('click', () => {
    toggleWatchedStatus(index);
  });
  tvShowCard.appendChild(toggleWatchedButton);

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

  const completedStatus = document.createElement('p');
  completedStatus.textContent = 'Completed: ' + (podcast.completed ? 'Yes' : 'No');
  podcastCard.appendChild(completedStatus);

  if (podcast.image) {
    const image = document.createElement('img');
    image.src = URL.createObjectURL(podcast.image);
    image.alt = 'Podcast Cover';
    image.classList.add('media-image');
    podcastCard.appendChild(image);
  }

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removePodcast(index);
  });
  podcastCard.appendChild(removeButton);

  const toggleCompletedButton = document.createElement('button');
  toggleCompletedButton.textContent = 'Toggle Completed';
  toggleCompletedButton.addEventListener('click', () => {
    toggleCompletedStatus(index);
  });
  podcastCard.appendChild(toggleCompletedButton);

  return podcastCard;
}


function addBookToLibrary() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const pagesInput = document.getElementById('pages');
  const readInput = document.getElementById('read');
  const imageInput = document.getElementById('image');

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value);
  const read = readInput.checked;
  const image = imageInput.files[0];

  const book = new Book(title, author, pages, read, image);
  myLibrary.push(book);

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;
  imageInput.value = null;

  displayBooks();
  resetImagePreview();
}


function addMovieToLibrary() {
  const titleInput = document.getElementById('movie-title');
  const directorInput = document.getElementById('director');
  const durationInput = document.getElementById('duration');
  const watchedInput = document.getElementById('watched');
  const imageInput = document.querySelector('#new-movie-form input[type="file"]');
  const imagePreview = document.getElementById('movie-image-preview');

  const title = titleInput.value;
  const director = directorInput.value;
  const duration = parseInt(durationInput.value);
  const watched = watchedInput.checked;
  const image = imageInput.files[0];

  const movie = new Movie(title, director, duration, watched, image);
  myMovies.push(movie);

  titleInput.value = '';
  directorInput.value = '';
  durationInput.value = '';
  watchedInput.checked = false;
  imageInput.value = null;
  imagePreview.innerHTML = '';

  displayMovies();
}

function addTVShowToLibrary() {
  const titleInput = document.getElementById('show-title');
  const creatorInput = document.getElementById('show-creator');
  const seasonsInput = document.getElementById('seasons');
  const watchedInput = document.getElementById('watched');
  const imageInput = document.querySelector('#new-tv-show-form input[type="file"]');
  const imagePreview = document.getElementById('tv-show-image-preview');

  const title = titleInput.value;
  const creator = creatorInput.value;
  const seasons = parseInt(seasonsInput.value);
  const watched = watchedInput.checked;
  const image = imageInput.files[0];

  const tvShow = new TVShow(title, creator, seasons, watched, image);
  myTVShows.push(tvShow);

  titleInput.value = '';
  creatorInput.value = '';
  seasonsInput.value = '';
  watchedInput.checked = false;
  imageInput.value = null;
  imagePreview.innerHTML = '';

  displayTVShows();
}

function addPodcastToLibrary() {
  const titleInput = document.getElementById('podcast-title');
  const hostInput = document.getElementById('host');
  const episodesInput = document.getElementById('episodes');
  const completedInput = document.getElementById('completed');
  const imageInput = document.querySelector('#new-podcast-form input[type="file"]');
  const imagePreview = document.getElementById('podcast-image-preview');

  const title = titleInput.value;
  const host = hostInput.value;
  const episodes = parseInt(episodesInput.value);
  const completed = completedInput.checked;
  const image = imageInput.files[0];

  const podcast = new Podcast(title, host, episodes, completed, image);
  myPodcasts.push(podcast);

  titleInput.value = '';
  hostInput.value = '';
  episodesInput.value = '';
  completedInput.checked = false;
  imageInput.value = null;
  imagePreview.innerHTML = '';

  displayPodcasts();
}

function removeItemFromLibrary(index, containerId) {
  if (containerId === 'books') {
    myLibrary.splice(index, 1);
    displayBooks();
  } else if (containerId === 'movies') {
    myMovies.splice(index, 1);
    displayMovies();
  } else if (containerId === 'tv-shows') {
    myTVShows.splice(index, 1);
    displayTVShows();
  } else if (containerId === 'podcasts') {
    myPodcasts.splice(index, 1);
    displayPodcasts();
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

function toggleReadStatus(index, containerId) {
  if (containerId === 'books') {
    const book = myLibrary[index];
    book.read = !book.read;
    displayBooks();
  }
}

function toggleWatchedStatus(index) {
  const movie = myMovies[index];
  movie.watched = !movie.watched;
  displayMovies();
}

function toggleCompletedStatus(index) {
  const podcast = myPodcasts[index];
  podcast.completed = !podcast.completed;
  displayPodcasts();
}

function previewImage(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  preview.innerHTML = '';

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageUrl = event.target.result;
      const imageElement = document.createElement('img');
      imageElement.setAttribute('src', imageUrl);
      imageElement.setAttribute('alt', 'Image Preview');
      imageElement.classList.add('preview-image');

      preview.appendChild(imageElement);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function resetImagePreview() {
  const imageInput = document.getElementById('image');
  const imagePreview = document.getElementById('image-preview');
  imagePreview.innerHTML = '';
  imageInput.value = '';
}

// Event Listeners
document.getElementById('new-book-btn').addEventListener('click', () => {
  document.getElementById('new-book-form').style.display = 'block';
});

document.getElementById('new-movie-btn').addEventListener('click', () => {
  document.getElementById('new-movie-form').style.display = 'block';
});

document.getElementById('new-tv-show-btn').addEventListener('click', () => {
  document.getElementById('new-tv-show-form').style.display = 'block';
});

document.getElementById('new-podcast-btn').addEventListener('click', () => {
  document.getElementById('new-podcast-form').style.display = 'block';
});

document.getElementById('new-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  document.getElementById('new-book-form').style.display = 'none';
  resetImagePreview();
});

document.getElementById('new-movie-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addMovieToLibrary();
  document.getElementById('new-movie-form').style.display = 'none';
  resetImagePreview('movie-image');
});

document.getElementById('new-tv-show-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addTVShowToLibrary();
  document.getElementById('new-tv-show-form').style.display = 'none';
  resetImagePreview('tv-show-image');
});

document.getElementById('new-podcast-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addPodcastToLibrary();
  document.getElementById('new-podcast-form').style.display = 'none';
  resetImagePreview('podcast-image');
});