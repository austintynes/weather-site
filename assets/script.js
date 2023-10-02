// Waits for all DOM elements to load before executing
document.addEventListener("DOMContentLoaded", function () {
  // API key
  const APIkey = "10253967aeb21b7d078f9ef409a75de7";

  // Gets DOM elements
  const searchBtn = document.getElementById("search-btn");
  const cityInput = document.getElementById("city-input");
  const historyList = document.getElementById("history-list");
  const weatherContainer = document.getElementById("weather-container");

  // Adds event listener to the search button
  searchBtn.addEventListener("click", function () {
    // Gets the city input value
    const city = cityInput.value;
    // Checks to see if the input is not empty
    if (city) {
      // Call function to get weather data for city
      getWeatherData(city);
    }
  });

  // Adds event listener to history list
  historyList.addEventListener("click", function (event) {
    // Checks if item was clicked
    if (event.target.classList.contains("history-item")) {
      // Get the text content of clicked city in history
      const city = event.target.textContent;
      // Call function to get weather for clicked city in history
      getweatherData(city);
    }
  });

  // Fetches weather data from OpenWeatherMap API
  function getWeatherData(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric')
        .then(response => response.json()) // Parse the JSON response from API
        .then(data => {
            displayWeatherData(data); // Calls function to display data
            saveToHistory(city) // Calls function to save the city to search history
        })
        .catch(error => console.error(error)); // Handles errors
  }
  // Displays the weather data specified
  function displayWeatherData(data) {


  }


});
