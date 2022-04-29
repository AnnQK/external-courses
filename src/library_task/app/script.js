// variables
const booksContainer = document.querySelector('.section__books');
const BOOK_URL = 'https://api.itbook.store/1.0/new';

// WORK WITH API
// getting books from api
async function getBooks() {
  const response = await fetch(BOOK_URL);
  const data = await response.json();
  const books = data.books;
  return books;
}

// getting books authors
async function getFullInfo(booksArr) {
  const booksFull = [];
  await Promise.all(
    booksArr.map(async (item) => {
      const response = await fetch(
        `https://api.itbook.store/1.0/books/${item.isbn13}`,
      );
      const data = await response.json();
      booksFull.push(data);
    }),
  );
  return booksFull;
}

// creating a container for every book
function renderBooks(booksArr) {
  return booksArr.forEach((book) => {
    booksContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="book-container">
      <div class="image-box">
      <img src="${book.image}" alt="" class="book-container__image" /></div>
      <h3 class="book-container__title">${book.title.slice(0, 20)}…</h3>
      <h4 class="book-container__author">${book.authors.split(',')[0]}</h4>
      <div class="book-container__stats" data-raiting="0">
        <svg id="" class="svg-logo stats-star">
          <use href="#star" class="raiting-btn"></use>
        </svg>
        <svg id="" class="svg-logo stats-star">
          <use href="#star" class="raiting-btn"></use>
        </svg>
        <svg id="" class="svg-logo stats-star">
           <use href="#star" class="raiting-btn"></use>
        </svg>
        <svg id="" class="svg-logo stats-star">
          <use href="#star" class="raiting-btn"></use>
        </svg>
        <svg id="" class="svg-logo stats-star">
          <use href="#star" class="raiting-btn"></use>
        </svg>
    </div>`,
    );
  });
}

// RATING STARS

function raiting(e) {
  if (e.target.classList.contains('raiting-btn')) {
    const stars = Array.from(
      e.target
        .closest('.book-container__stats')
        .querySelectorAll('.raiting-btn'),
    );
    // stars container
    const starsContainer = e.target.closest('.book-container__stats');
    starsContainer.classList.add('disable-stars');
    const clickedStarIdx = stars.indexOf(e.target);
    starsContainer.dataset.raiting = clickedStarIdx + 1;
    stars.forEach((star, index) => {
      if (index <= clickedStarIdx) {
        star.parentElement.classList.add('active-raiting-btn');
      }
    });
  }
}

function renderRaiting() {
  // all raiting containers
  const starsContainers = document.querySelectorAll('.book-container__stats');
  // delegating click events
  starsContainers.forEach((item) => {
    item.addEventListener('click', raiting);
  });
}

getBooks()
  .then((res) => getFullInfo(res))
  .then((res) => renderBooks(res))
  .then(() => renderRaiting());
