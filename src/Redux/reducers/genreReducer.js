import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  genres: [],
  error: false,
};

export const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_GENRES_SUCCESS:
      return { ...state, genres: payload };
    default:
      return state;
  }
};
