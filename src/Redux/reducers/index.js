import { combineReducers } from "redux";
import {
  movieListReducer,
  movieDetailsReducer,
  genreReducer,
  nowPlayingReducer,
  popularReducer,
  upcomingReducer,
  TopRatedReducer,
  watchlistReducer,
  favoritesReducer,
} from "./movieReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";

const reducers = combineReducers({
  genres: genreReducer,
  nowPlaying: nowPlayingReducer,
  popular: popularReducer,
  upcoming: upcomingReducer,
  topRated: TopRatedReducer,
  movieDetails: movieDetailsReducer,
  movieList: movieListReducer,
  favorites: favoritesReducer,
  watchlist: watchlistReducer,
  auth: authReducer,
  ui: uiReducer,
});

export default reducers;
