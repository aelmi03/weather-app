/* eslint-disable prefer-destructuring */
import appendAllChildren from './helperFunctions';
import Pubsub from '../weather-logic/pubsub';

const extraDetailsContainer = document.querySelector(
  // eslint-disable-next-line prettier/prettier
  '.extra-details-container',
);

function displayExtraDetails([weatherObject, temperatureSign]) {
  extraDetailsContainer.textContent = '';
  const extraDetailsDiv = document.createElement('div');
  extraDetailsDiv.classList.add('extra-details');
  const sunriseDetail = document.createElement('h3');
  sunriseDetail.textContent = `Sunrise : ${weatherObject.sunrise}`;
  const sunsetDetail = document.createElement('h3');
  sunsetDetail.textContent = `Sunset : ${weatherObject.sunset}`;
  const humidityDetail = document.createElement('h3');
  humidityDetail.textContent = `Humidity : ${weatherObject.humidity}%`;
  const pressureDetail = document.createElement('h3');
  pressureDetail.textContent = `Pressure : ${weatherObject.pressure} mb`;
  const feelsLikeDetail = document.createElement('h3');
  feelsLikeDetail.textContent = `Feels Like : ${weatherObject.feels_like} ${temperatureSign}`;
  appendAllChildren(extraDetailsDiv, [
    sunriseDetail,
    sunsetDetail,
    humidityDetail,
    pressureDetail,
    feelsLikeDetail,
  ]);
  extraDetailsContainer.appendChild(extraDetailsDiv);
}

Pubsub.subscribe('loadExtraDetails', displayExtraDetails);
