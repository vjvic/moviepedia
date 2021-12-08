import { ActionTypes } from "Redux/constant/action-types";

const initialToken = localStorage.getItem("token");

const initialState = {
  token: initialToken,
  currentUser: "",
  loading: false,
  error: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TOKEN:
      return { ...state, token: payload, loading: false };
    case ActionTypes.SET_USER:
      return { ...state, currentUser: payload, error: "", loading: false };
    case ActionTypes.USER_LOGOUT:
      return { ...state, token: "", currentUser: "" };
    case ActionTypes.USER_LOADING:
      return { ...state, loading: true, error: "" };
    case ActionTypes.USER_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
