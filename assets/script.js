const API_KEY = "10253967aeb21b7d078f9ef409a75de7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const cityForm = document.querySelector(".city-form");
const cityInput = document.querySelector("#city-input");
const searchHistory = document.querySelector("#search-history");
const currentWeather = document.querySelector("#current-weather");
const forecast = document.querySelector("#forecast");

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

      document.querySelector(".city-name").textContent = "City: " + data.name;
      document.querySelector(".temp").textContent = "Temperature: " + data.main.temp + "°F";
      document.querySelector(".wind").textContent = "Wind speed: " + data.wind.speed + "mph";
      document.querySelector(".humidity").textContent = "Humidity: " + data.main.humidity + "%";

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
      document.querySelector(".temp1").textContent = "Temperature: " + data.list[3].main.temp + "°F";
      document.querySelector(".wind1").textContent =  "Wind speed: " + data.list[3].wind.speed + "mph";
      document.querySelector(".humidity1").textContent = "Humidity: " + data.list[3].main.humidity + "%";

      document.querySelector(".temp2").textContent = "Temperature: " + data.list[11].main.temp + "°F";
      document.querySelector(".wind2").textContent =  "Wind speed: " + data.list[11].wind.speed + "mph";
      document.querySelector(".humidity2").textContent = "Humidity: " + data.list[11].main.humidity + "%";

      document.querySelector(".temp3").textContent = "Temperature: " + data.list[19].main.temp + "°F";
      document.querySelector(".wind3").textContent =  "Wind speed: " + data.list[19].wind.speed + "mph";
      document.querySelector(".humidity3").textContent = "Humidity: " + data.list[19].main.humidity + "%";

      document.querySelector(".temp4").textContent = "Temperature: " + data.list[27].main.temp + "°F";
      document.querySelector(".wind4").textContent =  "Wind speed: " + data.list[27].wind.speed + "mph";
      document.querySelector(".humidity4").textContent = "Humidity: " + data.list[27].main.humidity + "%";

      document.querySelector(".temp5").textContent = "Temperature: " + data.list[35].main.temp + "°F";
      document.querySelector(".wind5").textContent =  "Wind speed: " + data.list[35].wind.speed + "mph";
      document.querySelector(".humidity5").textContent = "Humidity: " + data.list[35].main.humidity + "%";

      

      console.log(data);
      return;
    });
});
