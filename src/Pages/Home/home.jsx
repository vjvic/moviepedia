import React, { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
} from "Redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import MovieCarousel from "components/Carousel/MovieCarousel";
import Hero from "Pages/Home/Hero/Hero";
import Spinner from "components/Spinner/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const {
    popular,
    topRated,
    upcoming,
    nowPlayingLoading,
    popularLoading,
    topRatedLoading,
    upcomingLoading,
  } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchPopular());
    dispatch(fetchTopRated());
    dispatch(fetchUpcoming());
  }, [dispatch]);

  if (nowPlayingLoading || popularLoading || topRatedLoading || upcomingLoading)
    return <Spinner />;

  return (
    <div>
      {/*  hero */}
      <Hero />

      {/*  popular */}

      <MovieCarousel
        items={popular.results}
        type={"BACKDROP"}
        text={"Popular"}
      />

      {/*  top rated */}

      <MovieCarousel
        items={topRated.results}
        type={"POSTER"}
        text={"Top Rated"}
      />

      {/*  upcoming */}

      <MovieCarousel
        items={upcoming.results}
        type={"POSTER"}
        text={"Upcoming"}
      />
    </div>
  );
};

export default Home;
