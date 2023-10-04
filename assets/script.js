const API_KEY = "10253967aeb21b7d078f9ef409a75de7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const searchHistory = document.getElementById("search-history");
const currentWeather = document.getElementById("current-weather");
const forecast = document.getElementById("forecast");

cityForm.addEventListener("submit", function (event) {
  let cityName = cityInput.value.trim();
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    API_KEY +
    "&units=imperial";
  event.preventDefault();

  if (cityName === "") return;

  // Fetch current weather
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // Display current weather

      document.querySelector(".city-name").textContent = data.name;
      document.querySelector(".temp").textContent = data.main.temp;
      document.querySelector(".wind").textContent = data.wind.speed;
      document.querySelector(".humidity").textContent = data.main.humidity;

      console.log(data);
      return;
    });

  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    API_KEY +
    "&units=imperial";
  event.preventDefault();

  if (cityName === "") return;

  // Fetch current weather
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // Display current weather
      //         displayCurrentWeather(data);
      // Fetch 5-day forecast
      document.querySelector(".temp1").textContent = data.list[3].main.temp;
      document.querySelector(".wind1").textContent = data.list[3].wind.speed;
      document.querySelector(".humidity1").textContent = data.list[3].main.humidity;

      document.querySelector(".temp2").textContent = data.list[11].main.temp;
      document.querySelector(".wind2").textContent = data.list[11].wind.speed;
      document.querySelector(".humidity2").textContent = data.list[11].main.humidity;

      document.querySelector(".temp3").textContent = data.list[19].main.temp;
      document.querySelector(".wind3").textContent = data.list[19].wind.speed;
      document.querySelector(".humidity3").textContent = data.list[19].main.humidity;

      document.querySelector(".temp4").textContent = data.list[27].main.temp;
      document.querySelector(".wind4").textContent = data.list[27].wind.speed;
      document.querySelector(".humidity4").textContent = data.list[27].main.humidity;

      document.querySelector(".temp5").textContent = data.list[35].main.temp;
      document.querySelector(".wind5").textContent = data.list[35].wind.speed;
      document.querySelector(".humidity5").textContent = data.list[35].main.humidity;

      console.log(data);
      return;
    });
});
