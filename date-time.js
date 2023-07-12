function formatDate(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const suffixes = ['st', 'nd', 'rd', 'th'];

  const day = date.getDate();
  let suffix = suffixes[(day % 10) - 1] || suffixes[3];

  if (day >= 11 && day <= 13) {
    suffix = suffixes[3];
  }

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (second < 10) {
    second = `0 ${second}`;
  }
  if (minute < 10) {
    minute = `0 ${minute}`;
  }
  if (hour < 10) {
    hour = `0 ${hour}`;
  }
  const period = hour >= 12 ? 'pm' : 'am';

  hour %= 12;
  // hour = hour ? hour : 12; // Convert 0 to 12

  return `${months[date.getMonth()]} ${day}${suffix} ${date.getFullYear()} ${hour}:${minute}:${second} ${period}`;
}
function updateDate() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const dateElement = document.querySelector('#date');
  dateElement.textContent = formattedDate;
}

// Call the updateDate function to display the initial date
updateDate();

// Update the date every second
setInterval(updateDate, 1000);
