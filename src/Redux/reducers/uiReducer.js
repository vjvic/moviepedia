import { ActionTypes } from "Redux/constant/action-types";

const initialState = {
  isForm: false,
  toggleForm: true,
  isTrailer: false,
  isSidebar: false,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.OPEN_FORM:
      return { ...state, isForm: true };
    case ActionTypes.CLOSE_FORM:
      return { ...state, isForm: false };
    case ActionTypes.LOGIN_FORM:
      return { ...state, toggleForm: true };
    case ActionTypes.SIGNUP_FORM:
      return { ...state, toggleForm: false };
    case ActionTypes.OPEN_TRAILER:
      return { ...state, isTrailer: true };
    case ActionTypes.CLOSE_TRAILER:
      return { ...state, isTrailer: false };
    case ActionTypes.OPEN_SIDEBAR:
      return { ...state, isSidebar: true };
    case ActionTypes.CLOSE_SIDEBAR:
      return { ...state, isSidebar: false };
    default:
      return state;
  }
};
