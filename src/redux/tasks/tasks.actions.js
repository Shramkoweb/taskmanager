import actionTypes from './tasks.types';

const makeTest = () => {
  return {
    type: actionTypes.TEST,
    payload: 'test payload',
  };
};

export {
  makeTest,
};
