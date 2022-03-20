import { combineReducers } from "redux";
import authReducer from "./authReducer";
import fetchPostReducer from "./Feedbacks";
export default combineReducers({
  auth: authReducer,
  posts: fetchPostReducer,
});
