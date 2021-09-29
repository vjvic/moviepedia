import React from "react";
import { BtnOutline } from "styles/Button.styles";
import { DetailsBtnWrapper } from "./DetailsButtons.styles";
import { BsBookmark, BsPlay } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openTrailer } from "Redux/actions/uiAction";

const DetailsButtons = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movies);

  return (
    <DetailsBtnWrapper>
      {/* favorite button */}
      <BtnOutline round size="sm">
        <AiOutlineHeart />
        <span>Add to favorites</span>
      </BtnOutline>

      {/*  watchlist button   */}
      <BtnOutline round size="sm">
        <BsBookmark />
        <span>Add to watchlist</span>
      </BtnOutline>

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
