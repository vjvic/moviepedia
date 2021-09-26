import movieApi from "components/Apis/movieApi";
import { ActionTypes } from "Redux/constant/action-types";
import request from "Request/request";

//fetch genre
export const fetchGenre = (id, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_MOVIES_REQUEST });

  const { data } = await movieApi.get(request.discover, {
    params: { with_genres: id, page },
  });

  dispatch({ type: ActionTypes.GET_MOVIES_SUCCESS, payload: data });
};

//fetch results
export const fetchResults = (value, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_MOVIES_REQUEST });

  const { data } = await movieApi.get(request.search, {
    params: { query: value, page },
  });

  dispatch({ type: ActionTypes.GET_MOVIES_SUCCESS, payload: data });
};

//fetch movie details by id
export const fetchMovie = (movie_id) => async (dipatch) => {
  dipatch({ type: ActionTypes.GET_MOVIE_REQUEST });

  const { data: movieDetails } = await movieApi.get("/movie/" + movie_id, {
    params: { append_to_response: "videos" },
  });

  const {
    data: { cast: castData },
  } = await movieApi.get("/movie/" + movie_id + request.credits);

  const {
    data: { results: recommendations },
  } = await movieApi.get("/movie/" + movie_id + request.recommendation);

  const cast = castData.slice(0, 6);

  dipatch({
    type: ActionTypes.GET_MOVIE_SUCCESS,
    payload: { ...movieDetails, cast, recommendations },
  });
};
