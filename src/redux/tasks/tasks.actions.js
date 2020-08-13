import actionTypes from './tasks.types';

const fetchFailed = (error) => ({
  type: actionTypes.FETCH_TASKS_FAILED,
  payload: error,
});

const fetchTasks = () => ({
  type: actionTypes.FETCH_TASKS,
});

const fetchTasksSuccees = (tasks) => ({
  type: actionTypes.FETCH_TASKS_SUCCEEDED,
  payload: tasks,
});

const changeSortType = (type) => ({
  type: actionTypes.CHANGE_SORT_TYPE,
  payload: type,
});

export {
  fetchFailed,
  fetchTasks,
  fetchTasksSuccees,
  changeSortType,
};
