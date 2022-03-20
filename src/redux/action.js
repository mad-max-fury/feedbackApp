
import feedbackApp from "../api/feedbackApp"
const SIGNUP = "SIGNUP"
const SIGNIN = "SIGNIN"
const LOGOUT = "LOGOUT"



export const handleSignup = (fullName, userName, email, password) => async dispatch => {

  const response = await feedbackApp.post('/users/signup', {
    fullName, userName, email, password
  })
  dispatch({
    type: SIGNUP,
    payload: response.data
  })
}

export const handleSignin = (nameField, password) => async dispatch => {
  const response = await feedbackApp.post('/users/login', {
    nameField, password
  })
  dispatch({
    type: SIGNIN,
    payload: response.data
  })
}
export const handleLogout = () => async dispatch => {
  const response = await feedbackApp.get('/users/logout')
  dispatch({
    type: LOGOUT,
    payload: response.data
  })
}