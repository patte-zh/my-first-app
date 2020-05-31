let now = new Date();

let h1 = document.querySelector(`h1`);

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];

h1.innerHTML = `${day}, ${hours}:${minutes}`;

function showTemp(response) {
  console.log(response.data.main.temp);
  let city = response.data.name;
  let h2 = document.querySelector(`h2`);
  h2.innerHTML = city;

  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector(`#temperature`);
  h3.innerHTML = temperature;

  let description = response.data.weather[0].description;
  let p = document.querySelector(`#description`);
  p.innerHTML = description;

  let precipitation = Math.round(response.data.main.pressure);
  let classPrecip = document.querySelector(`#precipitation`);
  classPrecip.innerHTML = `pressure: ${precipitation} %`;

  let humidity = response.data.main.humidity;
  let div = document.querySelector(`#humidity`);
  div.innerHTML = `humidity: ${humidity} %`;

  let wind = response.data.wind.speed;
  let classWind = document.querySelector(`#wind`);
  classWind.innerHTML = `wind: ${wind} Km/h`;
}

function location(city) {
  let apiKey = `9cd8a2246f79707c08b7050e7b412588`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}
function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector(`#city-input`);
  location(cityInput.value);
}
let cityForm = document.querySelector(`#city-form`);
cityForm.addEventListener(`submit`, search);

function current(response) {
  let city = response.data.name;
  let h2 = document.querySelector(`h2`);
  h2.innerHTML = city;

  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector(`#temperature`);
  h3.innerHTML = temperature;

  let description = response.data.weather[0].description;
  let p = document.querySelector(`#description`);
  p.innerHTML = description;

  let precipitation = Math.round(response.data.main.pressure);
  let classPrecip = document.querySelector(`#precipitation`);
  classPrecip.innerHTML = `pressure: ${precipitation} %`;

  let humidity = response.data.main.humidity;
  let div = document.querySelector(`#humidity`);
  div.innerHTML = `humidity: ${humidity} %`;

  let wind = response.data.wind.speed;
  let classWind = document.querySelector(`#wind`);
  classWind.innerHTML = `wind: ${wind} Km/h`;
}

function showPosition(position) {
  let apiKey = `9cd8a2246f79707c08b7050e7b412588`;
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(current);
}
let currentCity = document.querySelector(`#button-current`);
currentCity.addEventListener(`click`, current);

navigator.geolocation.getCurrentPosition(showPosition);
