const fetchBooks = () => {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(parseJSON)
    .then(renderBooks)
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
function parseJSON(response) {
  return response.json();
}

