import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  movies: [],
  movie: null,
  moviesLoading: true,
  movieLoading: true,
  error: false,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_MOVIES_REQUEST:
      return { ...state, moviesLoading: true };
    case ActionTypes.GET_MOVIES_SUCCESS:
      return { ...state, movies: payload, moviesLoading: false };
    case ActionTypes.GET_MOVIES_FAILED:
      return { ...state, movies: [], moviesLoading: false, error: payload };

    case ActionTypes.GET_MOVIE_REQUEST:
      return { ...state, movieLoading: true };
    case ActionTypes.GET_MOVIE_SUCCESS:
      return { ...state, movie: payload, movieLoading: false };
    case ActionTypes.GET_MOVIE_FAILED:
      return { ...state, movie: null, movieLoading: false, error: payload };
    default:
      return state;
  }
};
