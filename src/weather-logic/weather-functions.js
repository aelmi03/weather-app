/* eslint-disable comma-dangle */
import { fromUnixTime } from 'date-fns';

async function getLatitudeAndLongtitude(city) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=712b9aa6ed9063798a216524da6bb71e`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return [weatherData.coord.lat, weatherData.coord.lon];
}

async function getWeatherTodayByLocation(city, unit) {
  const [latitude, longitude] = await getLatitudeAndLongtitude(city);
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,alerts&appid=712b9aa6ed9063798a216524da6bb71e&units=${unit}`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return weatherData;
}
function convertUnixTimestampToHours(timeStamp) {
  const date = fromUnixTime(timeStamp);
  // eslint-disable-next-line prettier/prettier
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${date.getHours()}:${minutes}}`;
}
function transformToCurrentWeatherObject(weatherObject, weatherCity) {
  const city = weatherCity;
  const sunrise = convertUnixTimestampToHours(weatherObject.current.sunrise);
  const sunset = convertUnixTimestampToHours(weatherObject.current.sunset);
  const {
    // eslint-disable-next-line camelcase
    current: { feels_like },
  } = weatherObject;
  const {
    current: { temp, humidity, pressure },
  } = weatherObject;
  // eslint-disable-next-line prefer-destructuring
  const { main, icon, description } = weatherObject.current.weather[0];

  return {
    sunrise,
    sunset,
    feels_like,
    humidity,
    pressure,
    city,
    temp,
    main,
    description,
    icon,
  };
}

export {
  getWeatherTodayByLocation,
  getLatitudeAndLongtitude,
  transformToCurrentWeatherObject,
};
