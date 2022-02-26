
const SIGNUP = "SIGNUP"



export const handleSignup = (email, password) => async dispatch => {
  auth.createUserWithEmailAndPassword(email, password)
  dispatch({
    type: SIGNUP,
    payload: response.data
  })
}

