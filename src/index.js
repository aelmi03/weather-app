import { getWeatherTodayByLocation } from './weather-logic/weather-functions';

getWeatherTodayByLocation('Vancouver', 'metric')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
