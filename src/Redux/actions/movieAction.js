import movieApi from "components/Apis/movieApi";
import request from "Request/request";
import { db, timeStamp } from "firebase/config";
import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAIL,
  GET_NOW_PLAYING_REQUEST,
  GET_NOW_PLAYING_SUCCESS,
  GET_NOW_PLAYING_FAIL,
  GET_POPULAR_REQUEST,
  GET_POPULAR_SUCCESS,
  GET_TOP_RATED_REQUEST,
  GET_TOP_RATED_SUCCESS,
  GET_UPCOMING_REQUEST,
  GET_UPCOMING_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_FAIL,
  GET_POPULAR_FAIL,
  GET_TOP_RATED_FAIL,
  GET_UPCOMING_FAIL,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
  GET_WATCHLIST_REQUEST,
  GET_WATCHLIST_SUCCESS,
} from "redux/constant/movieConstants";

//fetch genre
export const fetchGenre = (id, page) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIES_REQUEST });

    const { data } = await movieApi.get(request.discover, {
      params: { with_genres: id, page },
    });

    dispatch({ type: GET_MOVIES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_MOVIES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//fetch results
export const fetchResults = (value, page) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIES_REQUEST });

    const { data } = await movieApi.get(request.search, {
      params: { query: value, page },
    });

    dispatch({ type: GET_MOVIES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_MOVIES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//fetch movie details by id
export const fetchMovie = (movie_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_REQUEST });

    const { data: movieDetails } = await movieApi.get("/movie/" + movie_id, {
      params: { append_to_response: "videos" },
    });

    const {
      data: { cast: castData },
    } = await movieApi.get("/movie/" + movie_id + request.credits);

    const {
      data: { results: recommendations },
    } = await movieApi.get("/movie/" + movie_id + request.recommendation);

    const cast = castData.slice(0, 6);

    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: { ...movieDetails, cast, recommendations },
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//fetch genres
export const fetchGenres = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GENRES_REQUEST });

    const { data } = await movieApi.get(request.genre);

    dispatch({ type: GET_GENRES_SUCCESS, payload: data.genres });
  } catch (err) {
    dispatch({
      type: GET_GENRES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//fetch now playing
export const fetchNowPlaying = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NOW_PLAYING_REQUEST });

    const { data } = await movieApi.get(request.nowPlaying);

    dispatch({ type: GET_NOW_PLAYING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_NOW_PLAYING_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//fetch popular
export const fetchPopular = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POPULAR_REQUEST });

    const { data } = await movieApi.get(request.popular);

    dispatch({ type: GET_POPULAR_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_POPULAR_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//fetch top rated

export const fetchTopRated = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_RATED_REQUEST });

    const { data } = await movieApi.get(request.topRated);

    dispatch({ type: GET_TOP_RATED_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_TOP_RATED_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//fetch upcoming

export const fetchUpcoming = () => async (dispatch) => {
  try {
    dispatch({ type: GET_UPCOMING_REQUEST });

    const { data } = await movieApi.get(request.upcoming);

    dispatch({ type: GET_UPCOMING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_UPCOMING_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

//saved movie to the database
export const addMovie = (userID, movieID, item, collection) => (dispatch) => {
  const createdAt = timeStamp();

  const movie = {
    title: item.title,
    overview: item.overview,
    poster_path: item.poster_path,
    release_date: item.release_date,
    vote_average: item.vote_average,
    id: item.id,
  };

  db.collection("users")
    .doc(userID)
    .collection(collection)
    .doc(movieID)
    .set({
      ...movie,
      createdAt,
    })
    .then(() => {
      /* dispatch({ type: ActionTypes.OPEN_SNACKBAR }); */
    });
};

//get favorites from the database
export const getFavorites = (userID) => (dispatch) => {
  dispatch({ type: GET_FAVORITES_REQUEST });

  db.collection("users")
    .doc(userID)
    .collection("favorites")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ ...doc.data() });
      });

      dispatch({
        type: GET_FAVORITES_SUCCESS,
        payload: arrData,
      });
    });
};

//get watchlist from the database
export const getWatchlist = (userID) => (dispatch) => {
  dispatch({ type: GET_WATCHLIST_REQUEST });

  db.collection("users")
    .doc(userID)
    .collection("watchlist")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ ...doc.data() });
      });

      dispatch({
        type: GET_WATCHLIST_SUCCESS,
        payload: arrData,
      });
    });
};

//delete the movie from the database

export const deleteMovie = (userID, movieID, collection) => () => {
  db.collection("users")
    .doc(userID)
    .collection(collection)
    .doc(movieID)
    .delete();
};
