import { createSelector } from 'reselect';

export const getTasks = (state) => state.tasks;

export const getTaskItems = createSelector(
  [getTasks],
  (task) => task.items,
);
