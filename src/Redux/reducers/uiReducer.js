import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  modal: false,
  form: true,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return { ...state, modal: true };
    case ActionTypes.CLOSE_MODAL:
      return { ...state, modal: false };
    case ActionTypes.LOGIN_FORM:
      return { ...state, form: true };
    case ActionTypes.SIGNUP_FORM:
      return { ...state, form: false };
    default:
      return state;
  }
};
