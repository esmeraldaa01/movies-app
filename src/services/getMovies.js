import axios from "axios"

const API_TOKEN = "f1cc5c30102569080cd7253ef643edc5";
export const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=en-US`

export const getMoviesList = (page) => {
  return axios.get(BASE_URL + "&page=" + page);
}

export const getMovieById = id => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}`);
}