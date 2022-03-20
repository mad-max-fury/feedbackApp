
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'


let initialState = localStorage.getItem("myStore") ? JSON.parse(localStorage.getItem("myStore")) : {};
export const configureStore = () => {
  const storeData = (store) => (next) => (action) => {

    // UPDATING THE STORE
    const result = next(action)
    //CURRENT State
    const currState = store.getState();

    // storing in local storage
    localStorage.setItem("myStore", JSON.stringify(currState))
    return result
  }

  return createStore(
    reducer,
    { ...initialState },
    compose(applyMiddleware(...[thunk, storeData]))
  )
}
