import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  loading: true,
  error: false,
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_LATEST:
      return { ...state, news: payload, loading: false };
    default:
      return state;
  }
};
