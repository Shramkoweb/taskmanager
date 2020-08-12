import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import tasks from './tasks/tasks.reducer';
import { watchFetchTasks } from './tasks/task.sagas';

export const rootReducer = combineReducers({
  tasks,
});

export const rootSaga = function* rootSaga() {
  yield all([
    watchFetchTasks(),
  ]);
};
