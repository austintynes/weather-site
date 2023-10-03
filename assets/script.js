const API_KEY = "10253967aeb21b7d078f9ef409a75de7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const searchHistory = document.getElementById("search-history");
const currentWeatherDiv = document.getElementById("current-weather");
const forecastDiv = document.getElementById("forecast");

cityForm.addEventListener("submit", function (event) {
  const cityName = cityInput.value.trim();
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    API_KEY;
  event.preventDefault();

  if (cityName === "") return;

  // Fetch current weather
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // Display current weather
      //         displayCurrentWeather(data);
      // Fetch 5-day forecast
      console.log(data);
      return;
    })
    .then((response) => response.json())
    /*       .then(data => {
            // Display 5-day forecast
            displayForecast(data);
            // Save search history in localStorage
            saveToLocalStorage(cityName);
            // Render search history
            renderSearchHistory();
        })*/
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
