async function getWeatherTodayByLocation(city, unit) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=712b9aa6ed9063798a216524da6bb71e&unit=${unit}`,
    // eslint-disable-next-line comma-dangle
    { mode: 'cors' }
  );
  const weatherData = await weatherResponse.json();
  return weatherData;
}

export { getWeatherTodayByLocation as default };
