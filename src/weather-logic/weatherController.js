import {
  getWeatherTodayByLocation,
  transformToCurrentWeatherObject,
  transformToWeeklyWeatherObject,
} from './weather-functions';

import Pubsub from './pubsub';

const searchInput = document.querySelector('#cityInput');
const temperatureButton = document.querySelector('.temperature-button');
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
async function loadData(e) {
  if (!checkIfSearchFieldIsFilled(e)) return;
  try {
    const weatherData = await getWeatherTodayByLocation(
      searchInput.value,
      // eslint-disable-next-line prettier/prettier
      getMatricValue(),
    );
    const todayWeather = transformToCurrentWeatherObject(weatherData);
    const nextWeekWeather = transformToWeeklyWeatherObject(weatherData);
    Pubsub.publish('displayTodayWeather', [
      todayWeather,
      temperatureButton.textContent,
    ]);
    Pubsub.publish('displayExtraDetails', [
      todayWeather,
      temperatureButton.textContent,
    ]);
    Pubsub.publish('displayNextWeekWeather', [
      nextWeekWeather,
      temperatureButton.textContent,
    ]);
    console.log(todayWeather);
  } catch (error) {
    Pubsub.publish('showCityNotFoundMessage');
  }
}
const form = document.querySelector('form');
form.addEventListener('submit', loadData);
