const FETCH_DATA = "FETCH_DATA";

const init = {
  feedback: null,
};

const fetchPostReducer = (state = init, action) => {
  if (action.type === FETCH_DATA) {
    console.log(action.payload);
    return {
      ...state,
      feedback: action.payload,
    };
  }
  return state;
};

export default fetchPostReducer;
