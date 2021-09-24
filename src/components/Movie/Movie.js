import React from "react";
import { MovieWrapper, Truncate } from "./Movie.styles";
import ReactStars from "react-rating-stars-component";

const Movie = ({ title, img, vote }) => {
  const average = (vote / 2 || 0).toFixed(1);

  return (
    <MovieWrapper>
      <img src={img} alt={title} />
      <Truncate>{title}</Truncate>
      <ReactStars
        isHalf={true}
        value={+average}
        count={5}
        size={24}
        activeColor="#fafafa"
        edit={false}
      />
    </MovieWrapper>
  );
};

export default Movie;
