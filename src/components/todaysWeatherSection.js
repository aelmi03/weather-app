import appendAllChildren from './helperFunctions';
import Pubsub from '../weather-logic/pubsub';
/* eslint-disable prefer-destructuring */
const todayWeatherCardContainer = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  '.today-card-container',
);
function displayTodayWeatherCard([weatherObject, temperatureSign]) {
  todayWeatherCardContainer.textContent = '';
  const todayCardDiv = document.createElement('div');
  todayCardDiv.classList.add('today-card');
  const cityName = document.createElement('h2');
  cityName.classList.add('city-name');
  cityName.textContent = weatherObject.city;
  const mainWeather = document.createElement('h3');
  mainWeather.textContent = weatherObject.main;
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('today-image-container');
  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('today-image');
  weatherIcon.src = `http://openweathermap.org/img/w/${weatherObject.icon}.png`;
  weatherIcon.alt = `icon depicting ${weatherObject.description}`;
  imageContainer.appendChild(weatherIcon);
  const descriptionOfWeather = document.createElement('h3');
  descriptionOfWeather.textContent = weatherObject.description;
  const temperatureOfToday = document.createElement('h2');
  temperatureOfToday.classList.add('today-temperature');
  temperatureOfToday.textContent = `${weatherObject.temp} ${temperatureSign}`;
  appendAllChildren(todayCardDiv, [
    cityName,
    mainWeather,
    imageContainer,
    descriptionOfWeather,
    temperatureOfToday,
  ]);
  todayWeatherCardContainer.appendChild(todayCardDiv);
}
Pubsub.subscribe('displayTodayWeather', displayTodayWeatherCard);
/*
<div class = "today-card-container">
      <div class="today-card">
        <h2 class="city-name">Vancouver</h2>
        <h3>Clouds</h3>
        <div class = "today-image-container">
          <img class = "today-image" src="http://openweathermap.org/img/w/04d.png" alt="weather-icon" />
        </div>
        <h3>Overcast clouds</h3>
        <h2 class = "today-temperature">22 °C</h3>
      </div>
    </div>
*/
