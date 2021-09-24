import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  movies: [],
  loading: true,
  error: false,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_MOVIE_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.GET_MOVIE_SUCCESS:
      return { ...state, movies: payload, loading: false };
    case ActionTypes.GET_MOVIE_FAILED:
      return { ...state, movies: [], loading: false, error: payload };
    default:
      return state;
  }
};
