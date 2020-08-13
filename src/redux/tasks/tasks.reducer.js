import actionTypes from './tasks.types';
import { sortTypes } from '../../constants';

const initialState = {
  items: [],
  isFetching: false,
  isLoaded: false,
  errors: [],
  sortType: sortTypes.DEFAULT,
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
    case actionTypes.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
