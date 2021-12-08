import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgUrl from "Request/imgUrl";
import Movie from "components/Movie/Movie";
import { CarouselWrapper } from "./MovieCarousel.styles";

const MovieCarousel = ({ items, type, text }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  //return type of image
  const imageType = (type, item) => {
    if (type === "BACKDROP") {
      return imgUrl.small + item.backdrop_path;
    } else if (type === "POSTER") {
      return imgUrl.small + item.poster_path;
    }
  };

  return (
    <CarouselWrapper>
      <h2>{text}</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {items.map((item) => (
          <Movie
            key={item.id}
            title={item.title}
            img={imageType(type, item)}
            vote={item.vote_average}
            id={item.id}
          />
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default MovieCarousel;
