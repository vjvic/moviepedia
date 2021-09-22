const apiKey = process.env.REACT_APP_API_KEY;

const request = {
  popular: "movie/popular?api_key=" + apiKey,
  nowPlaying: "movie/now_playing?api_key=" + apiKey,
  upcoming: "movie/upcoming?api_key=" + apiKey,
  topRated: "movie/top_rated?api_key=" + apiKey,
  url: `?api_key=${apiKey}&language=en-US`,
  fetchVideo: `/videos?api_key=${apiKey}&language=en-US`,
  credits: `/credits?api_key=${apiKey}&language=en-US`,
  recommendation: `/recommendations?api_key=${apiKey}&language=en-US`,
  reviews: `/reviews?api_key=${apiKey}&language=en-US&page=1`,
  genre: `genre/movie/list?api_key=${apiKey}&language=en-US`,
  discover: `discover/movie?api_key=${apiKey}&with_genres=`,
  search: `search/movie?api_key=${apiKey}&language=en-US&query=`,
};

export default request;
