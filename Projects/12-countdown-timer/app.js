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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022,7,12,23,30,0);
let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let weekday = weekdays[futureDate.getDay()];
let date = futureDate.getDate();
let hours = futureDate.getHours();
let minuts = futureDate.getMinutes();
let secends = futureDate.getSeconds();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month}, ${year}, ${hours}:${minuts}`;

// future time in ms
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minuts = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  // if the value less then ten
  function format(item) {
    if(item < 10) {
      return item = `0${item}`;
    }
    return item;
  }
  // set values array
  const values = [days, hours, minuts, seconds];
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  }); 
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired.</h4>`
  }
}
// countdown
const countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();