let datePlace = document.getElementsByClassName("sign-title")[0];
let date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
datePlace.innerHTML =
  "Ratingen, " + months[date.getMonth()] + " " + date.getFullYear();
