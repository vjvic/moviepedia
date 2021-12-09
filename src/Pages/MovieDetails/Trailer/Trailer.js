import React from "react";
import { TrailerContainer } from "./Trailer.styles";
import { motion } from "framer-motion";

const Trailer = ({ movie }) => {
  const trailer = movie.videos.results[0].key;

  return (
    <TrailerContainer>
      <motion.iframe
        src={`https://www.youtube-nocookie.com/embed/${trailer}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        initial={{ top: "-100%" }}
        animate={{ top: "50%" }}
      ></motion.iframe>
    </TrailerContainer>
  );
};

export default Trailer;
