/* eslint-disable prefer-destructuring */

import appendAllChildren from './helperFunctions';
import Pubsub from '../weather-logic/pubsub';

const weeklyForecastContainer = document.querySelector('.weekly-forecast');

function makeWeatherCardDiv([weatherObject, temperatureSign]) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('weekly-forecast-card');
  const date = document.createElement('h3');
  date.textContent = weatherObject.date;
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('weather-image-container');
  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('weather-image');
  weatherIcon.src = `http://openweathermap.org/img/w/${weatherObject.icon}.png`;
  weatherIcon.alt = `Icon depicting ${weatherObject.description}`;
  imageContainer.appendChild(weatherIcon);
  const weatherDescription = document.createElement('h3');
  weatherDescription.textContent = `${weatherObject.description}`;
  const minTemp = document.createElement('h3');
  minTemp.textContent = `Min : ${weatherObject.min} ${temperatureSign}`;
  const maxTemp = document.createElement('h3');
  maxTemp.textContent = `Max : ${weatherObject.max} ${temperatureSign}`;
  appendAllChildren(mainDiv, [
    date,
    imageContainer,
    weatherDescription,
    minTemp,
    maxTemp,
  ]);
  return mainDiv;
}
function displayWeeklyWeatherForecast([weeklyWeatherArray, temperatureSign]) {
  weeklyForecastContainer.textContent = '';
  console.log(':)');
  for (let i = 0; i < weeklyWeatherArray.length; i += 1) {
    const weatherDiv = makeWeatherCardDiv([
      weeklyWeatherArray[i],
      temperatureSign,
    ]);
    weeklyForecastContainer.appendChild(weatherDiv);
  }
}
Pubsub.subscribe('loadNextWeekWeather', displayWeeklyWeatherForecast);
