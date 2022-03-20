import { toast, ToastContainer } from "react-toastify";
import feedbackApp from "../api/feedbackApp";
const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";
const LOGOUT = "LOGOUT";
const FETCH_DATA = "FETCH_DATA";

export const handleSignup =
  (fullName, userName, email, password) => async (dispatch) => {
    const response = await feedbackApp.post("/users/signup", {
      fullName,
      userName,
      email,
      password,
    });
    dispatch({
      type: SIGNUP,
      payload: response.data,
    });
  };

export const handleSignin = (nameField, password) => async (dispatch) => {
  try {
    const response = await feedbackApp.post("/users/login", {
      nameField,
      password,
    });
    dispatch({
      type: SIGNIN,
      payload: response.data,
    });
    toast(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
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
