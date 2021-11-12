import './weather.css';

import {
  getWeatherTodayByLocation,
  transformToCurrentWeatherObject,
  transformToWeeklyWeatherObject,
} from './weather-logic/weather-functions';

getWeatherTodayByLocation('Vancouver', 'metric')
  .then((response) => {
    const arrayOfWeather = transformToWeeklyWeatherObject(response);
    const currentWeather = transformToCurrentWeatherObject(response);
    console.log(arrayOfWeather);
    console.log(currentWeather);
  })
  .catch((err) => console.log(err));
