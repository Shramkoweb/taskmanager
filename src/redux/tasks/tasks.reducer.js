import actionTypes from './tasks.types';

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default reducer;
