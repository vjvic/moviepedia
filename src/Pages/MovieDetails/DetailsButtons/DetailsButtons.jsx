import React from "react";
import { BtnOutline } from "styles/Button.styles";
import { DetailsBtnWrapper } from "./DetailsButtons.styles";
import { BsBookmark, BsPlay } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openTrailer } from "Redux/actions/uiAction";
import { addMovie, deleteMovie } from "Redux/actions/firestoreAction";
import { FaCheck } from "react-icons/fa";
import spinner from "assets/spinner/spinner.gif";

const DetailsButtons = ({ movieID, movie }) => {
  const dispatch = useDispatch();

  const { currentUser, loading, token } = useSelector((state) => state.auth);
  const { favorites, watchlist, watchlistLoading, favoritesLoading } =
    useSelector((state) => state.firestore);

  //check the movie if it is in the database
  let storedFavorites = favorites.find((fave) => fave.id === movie.id);
  let storedWatchlist = watchlist.find((watch) => watch.id === movie.id);

  //return true if the movie is stored
  const isFavorite = storedFavorites ? true : false;
  const isWatchlist = storedWatchlist ? true : false;

  //disable if user not login
  const notLogin = !currentUser ? true : false;

  let userID = null;

  if (!loading && currentUser) {
    userID = currentUser[0].localId;
  }

  const handleAddMovie = (collection) => {
    dispatch(addMovie(userID, movieID, movie, collection));
  };

  const handleDeleteMovie = (collection) => {
    dispatch(deleteMovie(userID, movieID, collection));
  };

  return (
    <DetailsBtnWrapper>
      {/* favorite button */}
      {isFavorite ? (
        <BtnOutline
          round
          size="sm"
          onClick={() => handleDeleteMovie("favorites")}
        >
          <FaCheck /> <span>Add to favorites</span>
        </BtnOutline>
      ) : (
        <BtnOutline
          round
          size="sm"
          onClick={() => handleAddMovie("favorites")}
          disabled={notLogin}
        >
          {token && watchlistLoading ? (
            <img src={spinner} alt="spinner" />
          ) : (
            <AiOutlineHeart />
          )}
          <span>Add to favorites</span>
        </BtnOutline>
      )}

      {/*  watchlist button   */}
      {isWatchlist ? (
        <BtnOutline
          round
          size="sm"
          onClick={() => handleDeleteMovie("watchlist")}
        >
          <FaCheck /> <span>Add to watchlist</span>
        </BtnOutline>
      ) : (
        <BtnOutline
          round
          size="sm"
          onClick={() => handleAddMovie("watchlist")}
          disabled={notLogin}
        >
          {token && favoritesLoading ? (
            <img src={spinner} alt="spinner" />
          ) : (
            <BsBookmark />
          )}
          <span>Add to watchlist</span>
        </BtnOutline>
      )}

      {/*  trailer button */}
      {movie.videos.results <= 0 ? (
        ""
      ) : (
        <BtnOutline round size="sm" onClick={() => dispatch(openTrailer())}>
          <BsPlay />
          <span>Trailer</span>
        </BtnOutline>
      )}
    </DetailsBtnWrapper>
  );
};

export default DetailsButtons;
