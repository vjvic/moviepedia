import { ActionTypes } from "Redux/constant/action-types";
import { db, timeStamp } from "firebase/config";

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
  dispatch({ type: ActionTypes.GET_FAVORITES_REQUEST });

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
        type: ActionTypes.GET_FAVORITES_SUCCESS,
        payload: arrData,
      });
    });
};

//get watchlist from the database
export const getWatchlist = (userID) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_WATCHLIST_REQUEST });

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
        type: ActionTypes.GET_WATCHLIST_SUCCESS,
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
