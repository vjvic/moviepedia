import React, { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
} from "Redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import MovieCarousel from "components/Carousel/MovieCarousel";
import Hero from "Pages/Home/Hero/Hero";
import Spinner from "components/Spinner/Spinner";

const Home = () => {
  const dispatch = useDispatch();

  const {
    upcoming,
    loading: upcomingLoading,
    error: upcomingError,
  } = useSelector((state) => state.upcoming);
  const {
    topRated,
    loading: topRatedLoading,
    error: topRatedError,
  } = useSelector((state) => state.topRated);
  const {
    popular,
    loading: popularLoading,
    error: popularError,
  } = useSelector((state) => state.popular);

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchPopular());
    dispatch(fetchTopRated());
    dispatch(fetchUpcoming());
  }, [dispatch]);

  if (popularLoading || topRatedLoading || upcomingLoading) return <Spinner />;

  return (
    <div>
      {/*  hero */}
      <Hero />

      {/*  popular */}
      {popularError && <div>{popularError}</div>}
      {popular && (
        <MovieCarousel
          items={popular.results}
          type={"BACKDROP"}
          text={"Popular"}
        />
      )}

      {/*  top rated */}
      {topRatedError && <div>{topRatedError}</div>}
      {topRated && (
        <MovieCarousel
          items={topRated.results}
          type={"POSTER"}
          text={"Top Rated"}
        />
      )}

      {/*  upcoming */}

      {upcomingError && <div>{upcomingError}</div>}
      {upcoming && (
        <MovieCarousel
          items={upcoming.results}
          type={"POSTER"}
          text={"Upcoming"}
        />
      )}
    </div>
  );
};

export default Home;
