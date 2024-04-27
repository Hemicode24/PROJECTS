document.addEventListener('DOMContentLoaded', function() {
    const booksContainer = document.getElementById('books');
    const addBookForm = document.getElementById('addBookForm');
    const searchForm = document.getElementById('searchForm');

    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const newBook = document.createElement('div');
        newBook.innerHTML = `<strong>Title:</strong> ${title}, <strong>Author:</strong> ${author}`;
        booksContainer.appendChild(newBook);
        // Here you can add code to send data to the backend to add the new book to the database
    });

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('searchTerm').value;
        // Here you can add code to send data to the backend to search for books in the database based on the search term
    });
});
