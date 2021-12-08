import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "Redux/actions/movieAction";
import {
  SingleMovieContainer,
  ImgWrapper,
  RatingWrapper,
  Runtime,
  Overview,
  Genre,
  Cast,
  CastWrapper,
  CastOverlay,
} from "./MovieDetails.styles";
import imgUrl from "Request/imgUrl";
import ReactStars from "react-rating-stars-component";
import { convertAverage, getMovieLength } from "utils/utils";
import { Link } from "react-router-dom";
import MovieCarousel from "components/Carousel/MovieCarousel";
import Modal from "components/Modal/Modal";
import Trailer from "./Trailer/Trailer";
import { closeTrailer } from "Redux/actions/uiAction";
import DetailsButtons from "./DetailsButtons/DetailsButtons";
import Spinner from "components/Spinner/Spinner";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie, movieLoading } = useSelector((state) => state.movies);
  const { isTrailer } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  if (movieLoading) return <Spinner />;

  const {
    poster_path,
    title,
    overview,
    vote_average,
    release_date,
    runtime,
    genres,
    recommendations,
    cast,
  } = movie;

  return (
    <>
      {isTrailer && (
        <Modal close={() => dispatch(closeTrailer())}>
          <Trailer />
        </Modal>
      )}

      <SingleMovieContainer>
        {/*  movie image */}
        <ImgWrapper>
          <img src={imgUrl.small + poster_path} alt={title} />
        </ImgWrapper>

        <div>
          {/*  movie title */}
          <h1>{title}</h1>

          {/*  movie runtime & release data */}
          <Runtime>
            {release_date} <span>| {getMovieLength(runtime)}</span>
          </Runtime>

          {/* movie rating */}

          <RatingWrapper>
            <ReactStars
              isHalf={true}
              value={convertAverage(vote_average)}
              count={5}
              size={24}
              activeColor="#fafafa"
              edit={false}
            />
            <p>{convertAverage(vote_average).toFixed(1, 0)}</p>
          </RatingWrapper>

          {/* genre */}
          <h3>Genre</h3>
          <Genre>
            {genres.map((genre) => (
              <li key={genre.id}>
                <Link to={"/genre/" + genre.id}>{genre.name}</Link>
              </li>
            ))}
          </Genre>

          {/* movie  overview */}
          <Overview>
            <h3>Overview</h3>
            <p>{overview}</p>
          </Overview>

          {/* details buttons */}
          <DetailsButtons movieID={id} />

          {/* cast */}
          <h3>Cast</h3>
          <Cast>
            {cast.map((item) => (
              <CastWrapper key={item.id}>
                <img src={imgUrl.small + item.profile_path} alt={item.name} />
                <CastOverlay>
                  <h5>{item.name}</h5>
                </CastOverlay>
              </CastWrapper>
            ))}
          </Cast>
        </div>
      </SingleMovieContainer>

      {/*   recommendations */}

      <MovieCarousel
        items={recommendations}
        type={"BACKDROP"}
        text={recommendations.length <= 0 ? "" : "Recommendations"}
      />
    </>
  );
};

export default MovieDetails;
