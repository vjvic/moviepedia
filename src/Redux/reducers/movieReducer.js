import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAIL,
  GET_GENRES_SUCCESS,
  GET_POPULAR_REQUEST,
  GET_POPULAR_SUCCESS,
  GET_TOP_RATED_REQUEST,
  GET_TOP_RATED_SUCCESS,
  GET_UPCOMING_REQUEST,
  GET_UPCOMING_SUCCESS,
  GET_GENRES_REQUEST,
  GET_GENRES_FAIL,
  GET_NOW_PLAYING_FAIL,
  GET_NOW_PLAYING_SUCCESS,
  GET_NOW_PLAYING_REQUEST,
  GET_POPULAR_FAIL,
  GET_TOP_RATED_FAIL,
  GET_UPCOMING_FAIL,
  GET_WATCHLIST_REQUEST,
  GET_WATCHLIST_SUCCESS,
  GET_WATCHLIST_FAIL,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_FAIL,
} from "redux/constant/movieConstants";

export const movieListReducer = (state = { movies: [] }, { payload, type }) => {
  switch (type) {
    case GET_MOVIES_REQUEST:
      return { ...state, loading: true };
    case GET_MOVIES_SUCCESS:
      return { loading: false, movies: payload };
    case GET_MOVIES_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const movieDetailsReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case GET_MOVIE_REQUEST:
      return { ...state, loading: true };
    case GET_MOVIE_SUCCESS:
      return { loading: false, movie: payload };
    case GET_MOVIE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const genreReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_GENRES_REQUEST:
      return { ...state, loading: true };
    case GET_GENRES_SUCCESS:
      return { genres: payload };
    case GET_GENRES_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

//catergoty

export const nowPlayingReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_NOW_PLAYING_REQUEST:
      return { ...state, loading: true };
    case GET_NOW_PLAYING_SUCCESS:
      return { nowPlaying: payload, loading: false };
    case GET_NOW_PLAYING_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const popularReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_REQUEST:
      return { ...state, loading: true };
    case GET_POPULAR_SUCCESS:
      return { popular: payload, loading: false };
    case GET_POPULAR_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const TopRatedReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TOP_RATED_REQUEST:
      return { ...state, loading: true };
    case GET_TOP_RATED_SUCCESS:
      return { topRated: payload, loading: false };
    case GET_TOP_RATED_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const upcomingReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_UPCOMING_REQUEST:
      return { ...state, loading: true };
    case GET_UPCOMING_SUCCESS:
      return { upcoming: payload, loading: false };
    case GET_UPCOMING_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

//user movie
export const watchlistReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_WATCHLIST_REQUEST:
      return { ...state, loading: true };
    case GET_WATCHLIST_SUCCESS:
      return { watchlist: payload, lLoading: false };
    case GET_WATCHLIST_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const favoritesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_FAVORITES_REQUEST:
      return { ...state, loading: true };
    case GET_FAVORITES_SUCCESS:
      return { favorites: payload, loading: false };
    case GET_FAVORITES_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};
