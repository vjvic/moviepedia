import movieApi from "components/Apis/movieApi";
import { ActionTypes } from "Redux/constant/action-types";
import request from "Request/request";

//fetch genres
export const fetchGenres = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_GENRES_REQUEST });

  const { data } = await movieApi.get(request.genre);

  dispatch({ type: ActionTypes.GET_GENRES_SUCCESS, payload: data.genres });
};
