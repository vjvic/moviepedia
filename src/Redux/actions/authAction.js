import authApi from "components/Apis/authApi";
import { setToken, removeToken } from "utils/utils";
import request from "Request/request";
import {
  GET_TOKEN,
  SET_USER,
  USER_ERROR,
  USER_LOADING,
  USER_LOGOUT,
} from "redux/constant/authConstants";
import { CLOSE_FORM } from "redux/constant/uiConstants";

//login user
export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await authApi.post(request.login, {
      email,
      password,
    });

    setToken(data.idToken);

    dispatch({ type: GET_TOKEN, payload: data.idToken });
    dispatch({ type: CLOSE_FORM });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.data.error.message,
    });
  }
};

//signup user
export const signup = (email, password, userName) => (dispatch) => {
  authApi
    .post(request.signup, {
      email,
      password,
      returnSecureToken: true,
    })
    .then((response) => {
      setToken(response.data.idToken);
      dispatch({ type: GET_TOKEN, payload: response.data.idToken });

      return authApi.post(request.update, {
        idToken: response.data.idToken,
        displayName: userName,
      });
    })
    .then(() => {
      dispatch({ type: CLOSE_FORM });
    })
    .catch((error) => dispatch({ type: USER_ERROR, payload: error.message }));
};

//get user data
export const getUserData = (idToken) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  const { data } = await authApi.post(request.lookup, { idToken });

  dispatch({ type: SET_USER, payload: data.users });
};

//logout
export const logout = () => {
  removeToken();
  return { type: USER_LOGOUT };
};
