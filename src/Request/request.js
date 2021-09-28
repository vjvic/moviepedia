const request = {
  latest: "movie/latest",
  popular: "movie/popular",
  nowPlaying: "movie/now_playing",
  upcoming: "movie/upcoming",
  topRated: "movie/top_rated",
  fetchVideo: "/videos",
  credits: "/credits",
  recommendation: "/recommendations",
  reviews: "/reviews",
  genre: "genre/movie/list",
  discover: "discover/movie",
  search: "search/movie",
  //auth
  login: "/accounts:signInWithPassword",
  signup: "/accounts:signUp",
  update: "/accounts:update",
  lookup: "/accounts:lookup",
};

export default request;
