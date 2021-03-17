import axios from "axios";

const MOVIE_KEY = "98e69d9bfaf2f8b110e14d65918d729a";

// req function
const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params, // get content of Object which is   page: 2
      api_key: MOVIE_KEY,
    },
  });

// makeRequest("/movies", {page:2})

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (error) {
    return [null, error];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (word) => getAnything("/search/movie", { query: word }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (word) => getAnything("/search/tv", { query: word }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImageFormat = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500/${path}`
    : "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
