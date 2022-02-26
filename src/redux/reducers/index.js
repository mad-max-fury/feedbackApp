import { combineReducers } from 'redux'
import authReducer from './authReducer'
import feedbackReducer from './feedbackReducer'
export default combineReducers({
  auth: authReducer,
  feedback: feedbackReducer
})