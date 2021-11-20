/* eslint-disable prefer-destructuring */
import appendAllChildren from './helperFunctions';
import Pubsub from '../weather-logic/pubsub';

const hourlyForecastContainer = document.querySelector('.hourly-forecast');

function makeHourlyCardDiv(weatherObject, temperatureSign) {
  const hourlyCardDiv = document.createElement('div');
  hourlyCardDiv.classList.add('hourly-forecast-card');
  const hour = document.createElement('h3');
  hour.textContent = weatherObject.hour;
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('weather-image-container');
  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('weather-image');
  weatherIcon.src = `http://openweathermap.org/img/w/${weatherObject.icon}.png`;
  weatherIcon.alt = `Icon depicting ${weatherObject.description}`;
  imageContainer.appendChild(weatherIcon);
  const description = document.createElement('h3');
  description.textContent = weatherObject.description;
  const temperature = document.createElement('h3');
  temperature.textContent = `${weatherObject.temp} ${temperatureSign}`;
  appendAllChildren(hourlyCardDiv, [
    hour,
    imageContainer,
    description,
    temperature,
  ]);
  return hourlyCardDiv;
}
function displayHourlyWeatherForecast([weatherObjectArray, temperatureSign]) {
  hourlyForecastContainer.textContent = '';
  for (let i = 0; i < weatherObjectArray.length; i += 1) {
    const hourlyForeCastDiv = makeHourlyCardDiv(
      weatherObjectArray[i],
      // eslint-disable-next-line prettier/prettier
      temperatureSign,
    );
    hourlyForecastContainer.appendChild(hourlyForeCastDiv);
  }
}
Pubsub.subscribe('loadHourlyForecastData', displayHourlyWeatherForecast);
