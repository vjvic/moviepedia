import React from "react";
import { MovieWrapper, Truncate } from "./Movie.styles";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router";
import { convertAverage } from "utils/utils";

const Movie = ({ title, img, vote, id }) => {
  const history = useHistory();

  return (
    <MovieWrapper onClick={() => history.push("/movie/" + id)}>
      <img src={img} alt={title} />

      <Truncate>{title}</Truncate>

      <ReactStars
        isHalf={true}
        value={convertAverage(vote)}
        count={5}
        size={24}
        activeColor="#fafafa"
        edit={false}
      />
    </MovieWrapper>
  );
};

export default Movie;
