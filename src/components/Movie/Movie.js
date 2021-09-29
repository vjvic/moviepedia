import React from "react";
import { MovieContainer, ImgWrapper } from "./Movie.styles";
import ReactStars from "react-rating-stars-component";
import { useHistory } from "react-router";
import { convertAverage } from "utils/utils";
import { motion } from "framer-motion";
import { Truncate } from "styles/Trucate";

const Movie = ({ title, img, vote, id }) => {
  const history = useHistory();

  return (
    <MovieContainer
      onClick={() => history.push("/movie/" + id)}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ImgWrapper>
        <img src={img} alt={title} />
      </ImgWrapper>

      <Truncate>{title}</Truncate>

      <ReactStars
        isHalf={true}
        value={convertAverage(vote)}
        count={5}
        size={24}
        activeColor="#fafafa"
        edit={false}
      />
    </MovieContainer>
  );
};

export default Movie;
