import axios from 'axios';

const API_TOKEN = "f1cc5c30102569080cd7253ef643edc5";

const URL =  `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=en-US&page=1&include_adult=false`

export const searchm = query => {
  return axios.get(`${URL}&query=${query}`);
}