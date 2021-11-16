import {
  getWeatherTodayByLocation,
  transformToCurrentWeatherObject,
  transformToHourlyWeatherObject,
  transformToWeeklyWeatherObject,
} from './weather-functions';

import Pubsub from './pubsub';

const searchInput = document.querySelector('#cityInput');
const temperatureButton = document.querySelector('.temperature-button');
// eslint-disable-next-line no-unused-vars
let currentCity = 'London';
function getMatricValue() {
  // eslint-disable-next-line prefer-destructuring
  const temperatureValue = temperatureButton.textContent;
  if (temperatureValue === '°C') {
    return 'metric';
  }
  return 'imperial';
}
function checkIfSearchFieldIsFilled(e) {
  e.preventDefault();
  return e.target.checkValidity();
}
async function loadData(city) {
  try {
    const weatherData = await getWeatherTodayByLocation(
      city,
      // eslint-disable-next-line prettier/prettier
      getMatricValue(),
    );
    const todayWeather = transformToCurrentWeatherObject(weatherData);
    const nextWeekWeather = transformToWeeklyWeatherObject(weatherData);
    const hourlyWeather = transformToHourlyWeatherObject(weatherData);
    console.log(hourlyWeather);
    // eslint-disable-next-line prefer-destructuring
    currentCity = searchInput.value || currentCity;
    Pubsub.publish('loadTodaysWeather', [
      todayWeather,
      temperatureButton.textContent,
    ]);
    Pubsub.publish('loadExtraDetails', [
      todayWeather,
      temperatureButton.textContent,
    ]);
    Pubsub.publish('loadHourlyForecastData', [
      hourlyWeather,
      temperatureButton.textContent,
    ]);
    Pubsub.publish('loadNextWeekWeather', [
      nextWeekWeather,
      temperatureButton.textContent,
    ]);
    console.log(todayWeather);
  } catch (error) {
    Pubsub.publish('showCityNotFoundMessage');
  }
}
function searchWeatherData(e) {
  if (!checkIfSearchFieldIsFilled(e)) return;
  loadData(searchInput.value);
}
function changeTemperatureUnit(e) {
  if (e.target.textContent === '°C') {
    e.target.textContent = '°F';
  } else {
    e.target.textContent = '°C';
  }
  loadData(currentCity);
}
const form = document.querySelector('form');
form.addEventListener('submit', searchWeatherData);
temperatureButton.addEventListener('click', changeTemperatureUnit);
