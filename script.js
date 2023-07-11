/* eslint-disable no-plusplus */
// Retrieve books from local storage if available
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to save books to local storage
function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}
// defining a class for form inputs 
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
// createing a function to add books by user through form inputs
function addBooks(event) {
  // prevents default form submission
  event.preventDefault();

  // getting the input values against variables
  let titleInput = document.getElementById('title');
  let authorInput = document.getElementById('author');
  let title = titleInput.value;
  let author = authorInput.value;

  // creating a books object
  let book = new Book(title, author);
  // {
  // };
  // adding book to the books array
  books.push(book);
  
  // clearing the inputs values after user clicks add button.
  titleInput.value = '';
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
  let bookCount = 0;
  let bookList = document.getElementById('added-books');
  // Clear the existing list
  bookList.innerHTML = '';

  // Create a new list item for each book
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let booksDiv = document.createElement('div');
    booksDiv.setAttribute('class', 'books-div');
    bookCount++;
    if (bookCount % 2 === 0) {
      booksDiv.style.backgroundColor = "white";
    }
    let listItemTitle = document.createElement('p');
    listItemTitle.innerHTML = `"${book.title}" by ${book.author}`;
    booksDiv.appendChild(listItemTitle);    

    // Create a button to remove the book
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', function () {
      removeBook(i);
    });
    booksDiv.appendChild(removeButton);
    // const listItemHr = document.createElement('hr');

    // Append the books, author and remove button to the book list
    bookList.appendChild(booksDiv);
    // bookList.appendChild(listItemHr);
  }
}

// Add event listener to the form submission
let bookForm = document.getElementById('form');
bookForm.addEventListener('submit', addBooks);
bookForm.addEventListener('submit', showBooks);
showBooks();
