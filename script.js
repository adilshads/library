let myLibrary = [];

function Book(title, author, pages, completed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

function Movie(title, director, duration, completed) {
  this.title = title;
  this.director = director;
  this.duration = duration;
  this.completed = completed;
}

function TVShow(title, creator, numEpisodes, completed) {
  this.title = title;
  this.creator = creator;
  this.numEpisodes = numEpisodes;
  this.completed = completed;
}

function Podcast(title, host, duration, completed) {
  this.title = title;
  this.host = host;
  this.duration = duration;
  this.completed = completed;
}

function addBookToLibrary(title, author, pages, completed) {
  const book = new Book(title, author, pages, completed);
  myLibrary.push(book);
  displayLibrary();
}

function addMovieToLibrary(title, director, duration, completed) {
  const movie = new Movie(title, director, duration, completed);
  myLibrary.push(movie);
  displayLibrary();
}

function addTVShowToLibrary(title, creator, numEpisodes, completed) {
  const tvShow = new TVShow(title, creator, numEpisodes, completed);
  myLibrary.push(tvShow);
  displayLibrary();
}

function addPodcastToLibrary(title, host, duration, completed) {
  const podcast = new Podcast(title, host, duration, completed);
  myLibrary.push(podcast);
  displayLibrary();
}

function openForm(type, itemIndex) {
  const formContainer = document.getElementById('form-container');
  formContainer.innerHTML = '';

  const form = document.createElement('form');
  form.setAttribute('onsubmit', `handleFormSubmit(event, '${type}', ${itemIndex})`);

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleLabel.appendChild(titleInput);

  const authorLabel = document.createElement('label');
  authorLabel.textContent = 'Author/Director/Creator:';
  const authorInput = document.createElement('input');
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('name', 'author');
  authorLabel.appendChild(authorInput);

  let extraLabel, extraInput;

  if (type === 'Book') {
    extraLabel = document.createElement('label');
    extraLabel.textContent = 'Number of Pages:';
    extraInput = document.createElement('input');
    extraInput.setAttribute('type', 'number');
    extraInput.setAttribute('name', 'pages');
    extraLabel.appendChild(extraInput);
  } else if (type === 'Movie') {
    extraLabel = document.createElement('label');
    extraLabel.textContent = 'Director:';
    extraInput = document.createElement('input');
    extraInput.setAttribute('type', 'text');
    extraInput.setAttribute('name', 'director');
    extraLabel.appendChild(extraInput);

    const durationLabel = document.createElement('label');
    durationLabel.textContent = 'Duration (in minutes):';
    const durationInput = document.createElement('input');
    durationInput.setAttribute('type', 'number');
    durationInput.setAttribute('name', 'duration');
    durationLabel.appendChild(durationInput);
    form.appendChild(durationLabel);
  } else if (type === 'TVShow') {
    extraLabel = document.createElement('label');
    extraLabel.textContent = 'Creator:';
    extraInput = document.createElement('input');
    extraInput.setAttribute('type', 'text');
    extraInput.setAttribute('name', 'creator');
    extraLabel.appendChild(extraInput);

    const episodesLabel = document.createElement('label');
    episodesLabel.textContent = 'Number of Episodes:';
    const episodesInput = document.createElement('input');
    episodesInput.setAttribute('type', 'number');
    episodesInput.setAttribute('name', 'numEpisodes');
    episodesLabel.appendChild(episodesInput);
    form.appendChild(episodesLabel);
  } else if (type === 'Podcast') {
    extraLabel = document.createElement('label');
    extraLabel.textContent = 'Host:';
    extraInput = document.createElement('input');
    extraInput.setAttribute('type', 'text');
    extraInput.setAttribute('name', 'host');
    extraLabel.appendChild(extraInput);

    const durationLabel = document.createElement('label');
    durationLabel.textContent = 'Duration (in minutes):';
    const durationInput = document.createElement('input');
    durationInput.setAttribute('type', 'number');
    durationInput.setAttribute('name', 'duration');
    durationLabel.appendChild(durationInput);
    form.appendChild(durationLabel);
  }

  const completedLabel = document.createElement('label');
  completedLabel.textContent = 'Completed:';
  const completedInput = document.createElement('input');
  completedInput.setAttribute('type', 'checkbox');
  completedInput.setAttribute('name', 'completed');
  completedLabel.appendChild(completedInput);

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';

  form.appendChild(titleLabel);
  form.appendChild(authorLabel);
  if (extraLabel && extraInput) {
    form.appendChild(extraLabel);
    form.appendChild(extraInput);
  }
  form.appendChild(completedLabel);
  form.appendChild(addButton);

  formContainer.appendChild(form);
  formContainer.style.display = 'block';
}

function handleFormSubmit(event, type, itemIndex) {
  event.preventDefault();

  const form = event.target;
  const title = form.title.value;
  const author = form.author.value;
  const completed = form.completed.checked;

  if (type === 'Book') {
    const pages = form.pages.value;
    if (itemIndex !== null) {
      updateLibraryItem(itemIndex, title, author, pages, completed);
    } else {
      addBookToLibrary(title, author, pages, completed);
    }
  } else if (type === 'Movie') {
    const director = form.director.value;
    const duration = form.duration.value;
    if (itemIndex !== null) {
      updateLibraryItem(itemIndex, title, director, duration, completed);
    } else {
      addMovieToLibrary(title, director, duration, completed);
    }
  } else if (type === 'TVShow') {
    const creator = form.creator.value;
    const numEpisodes = form.numEpisodes.value;
    if (itemIndex !== null) {
      updateLibraryItem(itemIndex, title, creator, numEpisodes, completed);
    } else {
      addTVShowToLibrary(title, creator, numEpisodes, completed);
    }
  } else if (type === 'Podcast') {
    const host = form.host.value;
    const duration = form.duration.value;
    if (itemIndex !== null) {
      updateLibraryItem(itemIndex, title, host, duration, completed);
    } else {
      addPodcastToLibrary(title, host, duration, completed);
    }
  }

  form.reset();
  const formContainer = document.getElementById('form-container');
  formContainer.style.display = 'none';
}

function updateLibraryItem(itemIndex, title, author, extraValue, completed) {
  const item = myLibrary[itemIndex];
  if (item instanceof Book) {
    item.title = title;
    item.author = author;
    item.pages = extraValue;
    item.completed = completed;
  } else if (item instanceof Movie) {
    item.title = title;
    item.director = author;
    item.duration = extraValue;
    item.completed = completed;
  } else if (item instanceof TVShow) {
    item.title = title;
    item.creator = author;
    item.numEpisodes = extraValue;
    item.completed = completed;
  } else if (item instanceof Podcast) {
    item.title = title;
    item.host = author;
    item.duration = extraValue;
    item.completed = completed;
  }
  displayLibrary();
}

function displayItem(item) {
  const displayContainer = document.getElementById('display-container');
  const itemContainer = document.createElement('div');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.setAttribute('onclick', `openForm('${getItemType(item)}', ${getLibraryItemIndex(item)})`);

  itemContainer.innerHTML = `<strong>Title:</strong> ${item.title}<br><strong>Author/Director/Creator:</strong> ${item.author}<br>${getExtraFields(item)}<strong>Completed:</strong> <input type="checkbox" ${item.completed ? 'checked' : ''} disabled>`;
  itemContainer.appendChild(editButton);

  displayContainer.appendChild(itemContainer);
}

function getExtraFields(item) {
  if (item instanceof Book) {
    return `<strong>Number of Pages:</strong> ${item.pages}<br>`;
  } else if (item instanceof Movie) {
    return `<strong>Director:</strong> ${item.director}<br><strong>Duration:</strong> ${item.duration} minutes<br>`;
  } else if (item instanceof TVShow) {
    return `<strong>Creator:</strong> ${item.creator}<br><strong>Number of Episodes:</strong> ${item.numEpisodes}<br>`;
  } else if (item instanceof Podcast) {
    return `<strong>Host:</strong> ${item.host}<br><strong>Duration:</strong> ${item.duration} minutes<br>`;
  }
}

function getItemType(item) {
  if (item instanceof Book) {
    return 'Book';
  } else if (item instanceof Movie) {
    return 'Movie';
  } else if (item instanceof TVShow) {
    return 'TVShow';
  } else if (item instanceof Podcast) {
    return 'Podcast';
  }
}

function getLibraryItemIndex(item) {
  return myLibrary.findIndex(libraryItem => libraryItem === item);
}

function deleteItem(itemContainer) {
  const index = Array.from(itemContainer.parentNode.children).indexOf(itemContainer);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayLibrary();
  }
}

function displayLibrary() {
  const libraryContainer = document.getElementById('library-container');
  libraryContainer.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const item = myLibrary[i];
    const itemContainer = document.createElement('div');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('onclick', `openForm('${getItemType(item)}', ${getLibraryItemIndex(item)})`);

    itemContainer.innerHTML = `<strong>Title:</strong> ${item.title}<br><strong>Author/Director/Creator:</strong> ${item.author}<br>${getExtraFields(item)}<strong>Completed:</strong> <input type="checkbox" ${item.completed ? 'checked' : ''} disabled>`;
    itemContainer.appendChild(editButton);

    libraryContainer.appendChild(itemContainer);
  }
}

displayLibrary();
console.log(myLibrary);
