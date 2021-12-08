import { combineReducers } from "redux";
import { genreReducer } from "./genreReducer";
import { categoryReducer } from "./categoryReducer";
import { movieReducer } from "./movieReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";
import { firestoreReducer } from "./firestoreReducer";

const reducers = combineReducers({
  genres: genreReducer,
  category: categoryReducer,
  movies: movieReducer,
  auth: authReducer,
  ui: uiReducer,
  firestore: firestoreReducer,
});

export default reducers;
