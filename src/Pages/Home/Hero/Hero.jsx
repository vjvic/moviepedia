import React from "react";
import {
  HeroContainer,
  MovieWrapper,
  MovieOverlay,
  ReleaseDate,
  HeroTitle,
} from "./Hero.style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import imgUrl from "Request/imgUrl";
import { Button } from "styles/Button.styles";
import { useHistory } from "react-router";

const Hero = () => {
  const { nowPlaying, loading, error } = useSelector(
    (state) => state.nowPlaying
  );

  const history = useHistory();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (loading) return "";
  if (error) return error;
  return (
    <HeroContainer>
      <HeroTitle>Now Playing</HeroTitle>

      {nowPlaying && (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          sliderClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {nowPlaying.results.map((item) => (
            <MovieWrapper key={item.id}>
              <img
                src={imgUrl.original + item.backdrop_path}
                alt={item.title}
              />
              <MovieOverlay>
                <div>
                  <h2>{item.title}</h2>
                  <ReleaseDate>{item.release_date} </ReleaseDate>
                  <Button
                    color="primary"
                    size="md"
                    onClick={() => history.push("/movie/" + item.id)}
                  >
                    Details
                  </Button>
                </div>
              </MovieOverlay>
            </MovieWrapper>
          ))}
        </Carousel>
      )}
    </HeroContainer>
  );
};

export default Hero;
