import { call, put, takeEvery } from 'redux-saga/effects';
import actionTypes from './tasks.types';

import Api from '../../api';
import { fetchFailed, fetchTasksSuccees } from './tasks.actions';
import { adaptAPI } from '../../utils/api-adapter';

const authorization = 'Basic er883jdzbdw';
const api = new Api('https://11.ecmascript.pages.academy/task-manager', authorization);

function* onFetchTasks() {
  try {
    const response = yield call([api, api.getTasks]);
    yield put(fetchTasksSuccees(adaptAPI(response.data)));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

export function* watchFetchTasks() {
  yield takeEvery(actionTypes.FETCH_TASKS, onFetchTasks);
}
