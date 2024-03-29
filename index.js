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

// Hour

let date = document.querySelector(".date");
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
} else {
  minutes = `${minutes}`;
}
if (hour < 10) {
  hour = `0${hour}`;
} else {
  hour = `${hour}`;
}

date.innerHTML = `${day} ${hour}:${minutes},`;

function citySubmit(event) {
  event.preventDefault();
  let heading = document.querySelector("h1");
  let cityInput = document.querySelector("#city-searcher");
  let cityValue = cityInput.value;
  heading.innerHTML = cityValue;

  let apiKey = "8o0ct2d919b9a8da80b70734f10e872f";
  let weatherAPI = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}`;
  axios.get(weatherAPI).then(getWeather);
}

function getWeather(response) {
  let cityWeather = response.data.temperature.current;
  cityWeather = Math.round(cityWeather);
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = cityWeather;

  // Bonus - Changes Humidity and Wind Speed conditions
  let cityHumidity = response.data.temperature.humidity;
  let condition_humidity = document.querySelector(".humidity");
  condition_humidity.innerHTML = cityHumidity + "%";

  let cityWind = response.data.wind.speed;
  let condition_windSpeed = document.querySelector(".wind");
  condition_windSpeed.innerHTML = cityWind + "km/h";
}

let form = document.querySelector("form");
form.addEventListener("submit", citySubmit);
