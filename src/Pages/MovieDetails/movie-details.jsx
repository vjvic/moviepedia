import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "redux/actions/movieAction";
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
import { closeTrailer } from "redux/actions/uiAction";
import DetailsButtons from "./DetailsButtons/DetailsButtons";
import Spinner from "components/Spinner/Spinner";

const MovieDetails = () => {
  const { id } = useParams();
  const { isTrailer } = useSelector((state) => state.ui);
  const { movie, loading, error } = useSelector((state) => state.movieDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  if (error) return error;

  /*  const {
    poster_path,
    title,
    overview,
    vote_average,
    release_date,
    runtime,
    genres,
    recommendations,
    cast,
  } = movie; */

  return (
    <>
      {isTrailer && (
        <Modal close={() => dispatch(closeTrailer())}>
          <Trailer movie={movie} />
        </Modal>
      )}

      {movie && (
        <SingleMovieContainer>
          {/*  movie image */}
          <ImgWrapper>
            <img src={imgUrl.small + movie.poster_path} alt={movie.title} />
          </ImgWrapper>

          <div>
            {/*  movie title */}
            <h1>{movie.title}</h1>

            {/*  movie runtime & release data */}
            <Runtime>
              {movie.release_date}{" "}
              <span>| {getMovieLength(movie.runtime)}</span>
            </Runtime>

            {/* movie rating */}

            <RatingWrapper>
              <ReactStars
                isHalf={true}
                value={convertAverage(movie.vote_average)}
                count={5}
                size={24}
                activeColor="#fafafa"
                edit={false}
              />
              <p>{convertAverage(movie.vote_average).toFixed(1, 0)}</p>
            </RatingWrapper>

            {/* genre */}
            <h3>Genre</h3>
            <Genre>
              {movie.genres &&
                movie.genres.map((genre) => (
                  <li key={genre.id}>
                    <Link to={"/genre/" + genre.id}>{genre.name}</Link>
                  </li>
                ))}
            </Genre>

            {/* movie  overview */}
            <Overview>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </Overview>

            {/* details buttons */}
            <DetailsButtons movieID={id} movie={movie} />

            {/* cast */}
            <h3>Cast</h3>
            <Cast>
              {movie.cast &&
                movie.cast.map((item) => (
                  <CastWrapper key={item.id}>
                    <img
                      src={imgUrl.small + item.profile_path}
                      alt={item.name}
                    />
                    <CastOverlay>
                      <h5>{item.name}</h5>
                    </CastOverlay>
                  </CastWrapper>
                ))}
            </Cast>
          </div>
        </SingleMovieContainer>
      )}

      {/*   recommendations */}

      {movie && movie.recommendations && (
        <MovieCarousel
          items={movie.recommendations}
          type={"BACKDROP"}
          text={movie.recommendations.length <= 0 ? "" : "Recommendations"}
        />
      )}
    </>
  );
};

export default MovieDetails;
