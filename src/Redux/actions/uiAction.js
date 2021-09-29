import { ActionTypes } from "Redux/constant/action-types";

//open modal
export const openModal = () => {
  return { type: ActionTypes.OPEN_FORM };
};

//close modal
export const closeModal = () => {
  return { type: ActionTypes.CLOSE_FORM };
};

//toggle form

export const toggleLoginForm = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_FORM });
  dispatch({ type: ActionTypes.USER_ERROR, payload: "" });
};

export const toggleSignupForm = () => (dispatch) => {
  dispatch({ type: ActionTypes.SIGNUP_FORM });
  dispatch({ type: ActionTypes.USER_ERROR, payload: "" });
};

//open trailer

export const openTrailer = () => {
  return { type: ActionTypes.OPEN_TRAILER };
};

//close trailer
export const closeTrailer = () => {
  return { type: ActionTypes.CLOSE_TRAILER };
};
