// Local Storage
// Declaring Variables to get form inputs
const storageBook = document.querySelector('#book');
const storageAuthor = document.querySelector('#author');

// If data is eneterd previously and saved in local storage, retrieve it
const localSavedData = JSON.parse(localStorage.getItem('formSaved'));
// When the user loads the page, if there is any data in the local storage
// the input fields are pre-filled with this data.
if (localSavedData) {
  // Declaring variable and assinging values of object keys
  const localBook = localSavedData.title;
  const localAuthor = localSavedData.author;

  // assigning keys the values from form inputs
  storageBook.value = localBook;
  storageAuthor.value = localAuthor;
}
// function to preserve data in browser
function preserveData(event) {
  // This function prevent HTML refresh
  event.preventDefault();
  // Creating an object for form values to save later in local storage
  const formSavedData = {
    title: storageBook.value,
    author: storageAuthor.value,
  };
  // converting data into string before saving into browser storage
  const json = JSON.stringify(formSavedData);
  // It will save the data to local storage
  localStorage.setItem('formSaved', json);
}
storageBook.addEventListener('input', preserveData);
storageAuthor.addEventListener('input', preserveData);
