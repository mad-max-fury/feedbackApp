const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";
const LOGOUT = "LOGOUT";

const init = {
  profile: null,
  sign_up: false,
  sign_in: false,
};

const authReducer = (state = init, action) => {
  if (action.type === SIGNUP) {
    return {
      ...state,
      profile: action.payload.data,
      sign_up: true,
    };
  }
  if (action.type === SIGNIN) {
    return {
      ...state,
      profile: action.payload.data,
      sign_in: true,
    };
  }
  if (action.type === LOGOUT) {
    console.log(action.type);
    return {
      ...state,
      profile: null,
      sign_in: false,
      sign_up: false,
    };
  }

  return state;
};

export default authReducer;
