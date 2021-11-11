import './weather.css';

import { getNext7DaysOfWeather } from './weather-logic/weather-functions';

getNext7DaysOfWeather('Vancouver', 'metric')
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch((err) => console.log(err));
