import { USER_ERROR } from "redux/constant/authConstants";
import {
  CLOSE_FORM,
  CLOSE_SIDEBAR,
  CLOSE_TRAILER,
  LOGIN_FORM,
  OPEN_FORM,
  OPEN_SIDEBAR,
  OPEN_TRAILER,
  SIGNUP_FORM,
} from "redux/constant/uiConstants";

//open modal
export const openModal = () => {
  return { type: OPEN_FORM };
};

//close modal
export const closeModal = () => {
  return { type: CLOSE_FORM };
};

//toggle form

export const toggleLoginForm = () => (dispatch) => {
  dispatch({ type: LOGIN_FORM });
  dispatch({ type: USER_ERROR, payload: "" });
};

export const toggleSignupForm = () => (dispatch) => {
  dispatch({ type: SIGNUP_FORM });
  dispatch({ type: USER_ERROR, payload: "" });
};

//open trailer

export const openTrailer = () => {
  return { type: OPEN_TRAILER };
};

//close trailer
export const closeTrailer = () => {
  return { type: CLOSE_TRAILER };
};

//open sidebar

export const openSidebar = () => {
  return { type: OPEN_SIDEBAR };
};

//close sidebar

export const closeSidebar = () => {
  return { type: CLOSE_SIDEBAR };
};
