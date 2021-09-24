import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchGenre } from "Redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Movie from "components/Movie/Movie";
import imgUrl from "Request/imgUrl";
import { Grid } from "styles/Grid";

const Genre = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchGenre(id, 1));
  }, [dispatch, id]);

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

export default Genre;
