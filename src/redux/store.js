import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { watchFetchTasks } from './tasks/task.sagas';

import root from './root';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const store = createStore(
  root,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(watchFetchTasks);

export default store;
