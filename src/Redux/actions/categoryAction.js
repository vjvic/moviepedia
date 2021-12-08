import movieApi from "components/Apis/movieApi";
import { ActionTypes } from "Redux/constant/action-types";
import request from "Request/request";

//fetch now playing
export const fetchNowPlaying = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_NOW_PALYING_REQUEST });

  const { data } = await movieApi.get(request.nowPlaying);

  dispatch({ type: ActionTypes.GET_NOW_PALYING_SUCCESS, payload: data });
};

//fetch popular
export const fetchPopular = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_POPULAR_REQUEST });

  const { data } = await movieApi.get(request.popular);

  dispatch({ type: ActionTypes.GET_POPULAR_SUCCESS, payload: data });
};

//fetch top rated

export const fetchTopRated = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_TOP_RATED_REQUEST });

  const { data } = await movieApi.get(request.topRated);

  dispatch({ type: ActionTypes.GET_TOP_RATED_SUCCESS, payload: data });
};

//fetch upcoming

export const fetchUpcoming = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_UPCOMING_REQUEST });

  const { data } = await movieApi.get(request.upcoming);

  dispatch({ type: ActionTypes.GET_UPCOMING_SUCCESS, payload: data });
};
