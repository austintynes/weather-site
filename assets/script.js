document.addEventListener('DOMContentLoaded', function () {
    const APIkey = "10253967aeb21b7d078f9ef409a75de7";
    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    const historyList = document.getElementById('history-list');
    const weatherContainer = document.getElementById('weather-container');

    searchBtn.addEventListener('click', function () {
        const city = cityInput.value;
        if (city) {
            getWeatherData(city);
        }

    })







})
