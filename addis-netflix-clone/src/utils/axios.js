import axios from 'axios';

// Create a configured axios instance for TMDB API
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

});

export default instance;


