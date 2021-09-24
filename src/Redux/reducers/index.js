import { combineReducers } from "redux";
import { genreReducer } from "./genreReducer";
import { categoryReducer } from "./categoryReducer";

const reducers = combineReducers({
  genres: genreReducer,
  category: categoryReducer,
});

export default reducers;
