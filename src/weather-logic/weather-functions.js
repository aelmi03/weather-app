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
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=712b9aa6ed9063798a216524da6bb71e&units=${unit}`,
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  weatherData.city = city;
  return weatherData;
}
function convertUnixTimestampToHours(timeStamp) {
  const date = fromUnixTime(timeStamp);
  // eslint-disable-next-line prettier/prettier
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${date.getHours()}:${minutes}`;
}
function transformToCurrentWeatherObject(weatherObject) {
  const { city } = weatherObject;
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

async function getTodaysWeather(city, unit) {
  const weatherToday = await getWeatherTodayByLocation(city, unit);
  const todayWeatherObject = transformToCurrentWeatherObject(weatherToday);
  return todayWeatherObject;
}
function convertTimestampToDate(timeStamp) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentDate = new Date(timeStamp * 1000);
  return `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`;
}
function makeWeeklyObject(weatherObject) {
  const date = convertTimestampToDate(weatherObject.dt);
  // eslint-disable-next-line prefer-destructuring
  const { icon, description } = weatherObject.weather[0];
  const {
    temp: { min, max },
  } = weatherObject;
  return {
    date,
    icon,
    description,
    min,
    max,
  };
}
function transformToWeeklyWeatherObject(weatherObject) {
  const weeklyWeatherObjects = [];
  for (let i = 1; i < weatherObject.daily.length; i += 1) {
    // eslint-disable-next-line prefer-destructuring
    const weeklyWeatherObject = makeWeeklyObject(weatherObject.daily[i]);
    weeklyWeatherObjects.push(weeklyWeatherObject);
  }
  return weeklyWeatherObjects;
}
function makeHourlyObject(weatherObject) {
  const { temp } = weatherObject;
  // eslint-disable-next-line prefer-destructuring
  const { icon, description } = weatherObject.weather[0];
  const hour = convertUnixTimestampToHours(weatherObject.dt);
  return {
    hour,
    temp,
    icon,
    description,
  };
}
function transformToHourlyWeatherObject(weatherObject) {
  const hourlyWeatherObjects = [];
  for (let i = 0; i < 24; i += 1) {
    const hourlyWeatherObject = makeHourlyObject(weatherObject.hourly[i]);
    hourlyWeatherObjects.push(hourlyWeatherObject);
  }
  return hourlyWeatherObjects;
}
async function getNext7DaysOfWeather(city, unit) {
  const weatherToday = await getWeatherTodayByLocation(city, unit);
  const weeklyWeatherObjects = transformToWeeklyWeatherObject(weatherToday);
  return weeklyWeatherObjects;
}
export {
  getWeatherTodayByLocation,
  getTodaysWeather,
  getNext7DaysOfWeather,
  transformToCurrentWeatherObject,
  transformToWeeklyWeatherObject,
  transformToHourlyWeatherObject,
};
