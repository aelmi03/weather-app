async function getLatitudeAndLongtitude(city) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=712b9aa6ed9063798a216524da6bb71e`,
    // eslint-disable-next-line comma-dangle
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return [weatherData.coord.lat, weatherData.coord.lon];
}

async function getWeatherTodayByLocation(city, unit) {
  const [latitude, longitude] = await getLatitudeAndLongtitude(city);
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely,alerts&appid=712b9aa6ed9063798a216524da6bb71e&units=${unit}`,
    // eslint-disable-next-line comma-dangle
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return weatherData;
}
export { getWeatherTodayByLocation, getLatitudeAndLongtitude };
