import { combineReducers } from "redux";
import { genreReducer } from "./genreReducer";
import { categoryReducer } from "./categoryReducer";
import { movieReducer } from "./movieReducer";

const reducers = combineReducers({
  genres: genreReducer,
  category: categoryReducer,
  movies: movieReducer,
});

export default reducers;
