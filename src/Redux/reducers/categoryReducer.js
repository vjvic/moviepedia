import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
  nowPlayingLoading: true,
  popularLoading: true,
  topRatedLoading: true,
  upcomingLoading: true,
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_NOW_PALYING_REQUEST:
      return { ...state, nowPlayingLoading: true };
    case ActionTypes.GET_NOW_PALYING_SUCCESS:
      return { ...state, nowPlaying: payload, nowPlayingLoading: false };

    case ActionTypes.GET_POPULAR_REQUEST:
      return { ...state, popularLoading: true };
    case ActionTypes.GET_POPULAR_SUCCESS:
      return { ...state, popular: payload, popularLoading: false };

    case ActionTypes.GET_TOP_RATED_REQUEST:
      return { ...state, topRatedLoading: true };
    case ActionTypes.GET_TOP_RATED_SUCCESS:
      return { ...state, topRated: payload, topRatedLoading: false };

    case ActionTypes.GET_UPCOMING_REQUEST:
      return { ...state, upcomingLoading: true };
    case ActionTypes.GET_UPCOMING_SUCCESS:
      return { ...state, upcoming: payload, upcomingLoading: false };
    default:
      return state;
  }
};
