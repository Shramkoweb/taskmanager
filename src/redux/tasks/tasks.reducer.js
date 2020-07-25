import actionTypes from './tasks.types';

const initialState = {
  items: [],
  isFetching: false,
  isLoaded: false,
  errors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_TASKS_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
        isLoaded: true,
      };
    case actionTypes.FETCH_TASKS_FAILED:
      return {
        ...state,
        errors: [...state.errors, action.payload],
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
