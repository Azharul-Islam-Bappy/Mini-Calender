// Mini Calender


const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year"); 
const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

showCalender(); // calling the function

// function to show date 
function showCalender() {
  const d = new Date(); // creating an iunstance of date object 
  
  // populating the placeholder5
  date.innerText = d.getDate();
  day.innerText = weekdays[d.getDay()];
  month.innerText = allMonths[d.getMonth()];
  year.innerText = d.getFullYear();
}