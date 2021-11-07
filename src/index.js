import weatherFunction from './weather-logic/weather-functions';

weatherFunction('Vancouver', 'c')
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
console.log('HEYY');
