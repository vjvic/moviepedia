import {
  GET_TOKEN,
  SET_USER,
  USER_ERROR,
  USER_LOADING,
  USER_LOGOUT,
} from "redux/constant/authConstants";

const initialToken = localStorage.getItem("token");

const initialState = {
  token: initialToken,
  currentUser: "",
  loading: false,
  error: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOKEN:
      return { ...state, token: payload, loading: false };
    case SET_USER:
      return { ...state, currentUser: payload, error: "", loading: false };
    case USER_LOGOUT:
      return { ...state, token: "", currentUser: "" };
    case USER_LOADING:
      return { ...state, loading: true, error: "" };
    case USER_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
