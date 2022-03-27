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
export const handleGetPosts = () => async (dispatch) => {
  try {
    const response = await feedbackApp.get();
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
  window.localStorage.removeItem("myStore");
  window.location.reload();
  setTimeout(() => {
    toast.success("see Ya, come back quickly for more feed", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, 5000);

  dispatch({
    type: LOGOUT,
  });
};
