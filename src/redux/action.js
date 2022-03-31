import { toast, ToastContainer } from "react-toastify";
import feedbackApp from "../api/feedbackApp";
const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";
const LOGOUT = "LOGOUT";
const FETCH_DATA = "FETCH_DATA";

export const handleSignup = (data) => async (dispatch) => {
  dispatch({
    type: SIGNUP,
    payload: data,
  });
};

export const handleSignin = (data) => async (dispatch) => {
  dispatch({
    type: SIGNIN,
    payload: data,
  });
};
export const handleGetPosts = (filter, sort) => async (dispatch) => {
  try {
    const response = await feedbackApp.get(`/${filter}/${sort}`);
    dispatch({
      type: FETCH_DATA,
      payload: response.data,
    });
    toast(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
export const handleLogout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
