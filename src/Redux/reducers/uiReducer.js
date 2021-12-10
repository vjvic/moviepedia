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

const initialState = {
  isForm: false,
  toggleForm: true,
  isTrailer: false,
  isSidebar: false,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_FORM:
      return { ...state, isForm: true };
    case CLOSE_FORM:
      return { ...state, isForm: false };
    case LOGIN_FORM:
      return { ...state, toggleForm: true };
    case SIGNUP_FORM:
      return { ...state, toggleForm: false };
    case OPEN_TRAILER:
      return { ...state, isTrailer: true };
    case CLOSE_TRAILER:
      return { ...state, isTrailer: false };
    case OPEN_SIDEBAR:
      return { ...state, isSidebar: true };
    case CLOSE_SIDEBAR:
      return { ...state, isSidebar: false };
    default:
      return state;
  }
};
