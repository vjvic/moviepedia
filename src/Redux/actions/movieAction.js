import movieApi from "components/Apis/movieApi";
import { ActionTypes } from "Redux/constant/action-types";
import request from "Request/request";

//fetch genre
export const fetchGenre = (id, page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_MOVIE_REQUEST });

  const { data } = await movieApi.get(request.discover, {
    params: { with_genres: id, page },
  });

  dispatch({ type: ActionTypes.GET_MOVIE_SUCCESS, payload: data });
};
