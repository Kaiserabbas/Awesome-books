/* eslint-disable no-plusplus */
// Retrieve books from local storage if available
const books = JSON.parse(localStorage.getItem("books")) || [];

// Function to save books to local storage
function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}
// createing a function to add books by user through form inputs
function addBooks(event) {
  // prevents default form submission
  event.preventDefault();

  // getting the input values against variables
  const bookTitleInput = document.getElementById('book');
  const authorInput = document.getElementById('author');

  // creating a books object
  const book = {
    title: bookTitleInput.value,
    author: authorInput.value,
  };
  // adding book to the books array
  books.push(book);

  // clearing the inputs values after user clicks add button.
  bookTitleInput.value = '';
  authorInput.value = '';

  // updating the books list
  showBooks();
  
  // Save the books to local storage
  saveBooks();
}

// removing the values form the list when click remove button
function removeBook(index) {
  // Remove the book from the array
  books.splice(index, 1);
  // Update the book list
  showBooks();
  // Save the books to local storage
  saveBooks();  
}

// Function to display the books in the list
function showBooks() {
  const bookList = document.getElementById('added-books');
  bookList.innerHTML = '';
  // Clear the existing list

  // Create a new list item for each book
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const listItemTitle = document.createElement('p');
    const listItemAuthor = document.createElement('p');

    listItemTitle.innerHTML = book.title;
    listItemAuthor.innerHTML = book.author;

    // Create a button to remove the book
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', function () {
      removeBook(i);
    });
    const listItemHr = document.createElement('hr');

    // Append the books, author and remove button to the book list
    bookList.appendChild(listItemTitle);
    bookList.appendChild(listItemAuthor);
    bookList.appendChild(removeButton);
    bookList.appendChild(listItemHr);
  }
}

// Add event listener to the form submission
const bookForm = document.getElementById('form');
bookForm.addEventListener('submit', addBooks);
bookForm.addEventListener('submit', showBooks);
showBooks();
