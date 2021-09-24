import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "components/Movie/Movie";
import { fetchResults } from "Redux/actions/movieAction";
import { useParams } from "react-router";
import imgUrl from "Request/imgUrl";
import { Grid } from "styles/Grid";

const Results = () => {
  const { value } = useParams();
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchResults(value, 1));
  }, [dispatch, value]);

  if (loading) return "loading...";

  return (
    <div>
      <Grid>
        {movies.results.map((item) => (
          <Movie
            title={item.title}
            img={imgUrl.small + item.poster_path}
            vote={item.vote_average}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Results;
