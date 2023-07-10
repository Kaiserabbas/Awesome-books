// creating array to store books added by user
const books = [];

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
}

// removing the values form the list when click remove button
function removeBook(index) {
  // Remove the book from the array
  books.splice(index, 1);
  // Update the book list
  showBooks();
}
