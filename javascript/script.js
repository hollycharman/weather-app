let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let dateTime = document.querySelector(".date-time");
dateTime.innerHTML = `${day} ${hour}:${minute}`;

// W5

function search(city) {
  let units = "metric";
  let apiKey = "dd3c84aa52902bdf7c1e10f2561978df";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  let newCity = cityElement.innerHTML;
  search(city);
  let units = "metric";
  let apiKey = "dd3c84aa52902bdf7c1e10f2561978df";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = temp;

  let city = response.data.name;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = city;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

dateTime.innerHTML = `${day} ${hour}:${minute}`;

function getCurrentInfo(event) {
  event.preventdefault();

  function displayCurrentLocation(response) {
    console.log(response);
    let temp = Math.round(response.date.main.temp);
    let currentTemp = document.querySelector("#temperature");
    currentTemp.innerHTML = temp;

    let city = response.data.name;
    let currentCity = document.querySelector("#city");
    currentCity.innerHTML = city;
  }

  function showPosition(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let units = "metric";
    let apiKey = "dd3c84aa52902bdf7c1e10f2561978df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayCurrentLocation);
  }

  navigator.geolocation.getCurrentPosition(showPosition);
}

search("Cardiff");
