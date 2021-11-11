import './weather.css';

import { getTodaysWeather } from './weather-logic/weather-functions';

getTodaysWeather('Vancouver', 'metric')
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch((err) => console.log(err));
