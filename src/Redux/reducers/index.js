import { combineReducers } from "redux";
import {
  movieListReducer,
  movieDetailsReducer,
  genreReducer,
  nowPlayingReducer,
  popularReducer,
  upcomingReducer,
  TopRatedReducer,
} from "./movieReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";
import { firestoreReducer } from "./firestoreReducer";

const reducers = combineReducers({
  genres: genreReducer,
  nowPlaying: nowPlayingReducer,
  popular: popularReducer,
  upcoming: upcomingReducer,
  topRated: TopRatedReducer,
  movieDetails: movieDetailsReducer,
  movieList: movieListReducer,
  auth: authReducer,
  ui: uiReducer,
  firestore: firestoreReducer,
});

export default reducers;
