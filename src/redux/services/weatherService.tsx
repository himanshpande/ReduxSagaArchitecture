import axios from 'axios';

const API_KEY = 'a4086ae949bdfac156e17568535d9bcf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  getWeather: (city: string) => 
    axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`),
};
