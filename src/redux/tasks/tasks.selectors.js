import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';

import { sortTypes } from '../../constants';

export const getTasksState = (state) => state.tasks;

export const getSortType = createSelector(
  [getTasksState],
  (taskState) => taskState.sortType,
);

export const getTasks = createSelector(
  [getTasksState],
  (taskState) => taskState.items,
);

// TODO rewrite sortBy to func with moment?
// https://thomaskekeisen.de/en/blog/array-date-sort-lodash-momentjs/
export const getSortedTasks = createSelector(
  [getTasks, getSortType],
  (tasks, sortType) => {
    switch (sortType) {
      case sortTypes.DATE_UP:
        console.log(sortBy(tasks, 'dueDate'));
        return sortBy(tasks, 'dueDate');
      case sortTypes.DATE_DOWN:
        console.log(sortBy(tasks, 'dueDate').reverse());
        return sortBy(tasks, 'dueDate').reverse();
      default:
        return tasks;
    }
  },
);
