/* eslint-disable no-plusplus */
// Retrieve books from local storage if available
const books = JSON.parse(localStorage.getItem('books')) || [];

// Function to save books to local storage
function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

// Defining a class for Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(title, author) {
    const book = new Book(title, author);
    books.push(book);

    // Save the books to local storage
    saveBooks();
  }

  static removeBook(index) {
    books.splice(index, 1);

    // Save the books to local storage
    saveBooks();
  }
}

// Create a function to add books by user through form inputs
function addBooks(event) {
  // Prevents default form submission
  event.preventDefault();

  // Getting the input values against variables
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;

  // Add book using the Book class method
  Book.addBook(title, author);

  // Clearing the input values after the user clicks the add button
  titleInput.value = '';
  authorInput.value = '';

  // Update the books list
  showBooks();
}

// Removing the book from the list when the remove button is clicked
function removeBook(index) {
  // Remove the book using the Book class method
  Book.removeBook(index);

  // Update the book list
  showBooks();
}

// Function to display the books in the list
function showBooks() {
  const bookList = document.getElementById('added-books');

  // Clear the existing list
  bookList.innerHTML = '';

  // Create a new list item for each book
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const booksDiv = document.createElement('div');
    booksDiv.setAttribute('class', 'books-div');

    if (i % 2 === 0) {
      booksDiv.style.backgroundColor = '#fff';
    } else {
      booksDiv.style.backgroundColor = '#dddcdc';
    }

    const listItemTitle = document.createElement('p');
    listItemTitle.innerHTML = `"${book.title}" by ${book.author}`;
    booksDiv.appendChild(listItemTitle);

    // Create a button to remove the book
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', function () {
      removeBook(i);
    });
    booksDiv.appendChild(removeButton);

    // Append the books, author, and remove button to the book list
    bookList.appendChild(booksDiv);
  }
}

// Add event listener to the form submission
const bookForm = document.getElementById('form');
bookForm.addEventListener('submit', addBooks);
bookForm.addEventListener('submit', showBooks);
showBooks();
