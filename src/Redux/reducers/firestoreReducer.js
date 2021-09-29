import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  watchlist: [],
  watchlistLoading: true,
  watchlistError: false,

  favorites: [],
  favoritesLoading: true,
  favoritesError: false,
};

export const firestoreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_WATCHLIST_REQUEST:
      return { ...state, watclistLoading: true };
    case ActionTypes.GET_WATCHLIST_SUCCESS:
      return { ...state, watchlist: payload, watchlistLoading: false };
    case ActionTypes.GET_WATCHLIST_FAILED:
      return {
        ...state,
        watchlist: [],
        watchlistLoading: false,
        watchlistError: true,
      };

    case ActionTypes.GET_FAVORITES_REQUEST:
      return { ...state, favoritesLoading: true };
    case ActionTypes.GET_FAVORITES_SUCCESS:
      return { ...state, favorites: payload, favoritesLoading: false };
    case ActionTypes.GET_FAVORITES_FAILED:
      return {
        ...state,
        favorites: [],
        favoritesLoading: false,
        favoritesError: true,
      };
    default:
      return state;
  }
};
