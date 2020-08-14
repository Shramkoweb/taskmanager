import { filterTypes } from '../constants';

export const isRepeating = (repeatingDays) => Object.values(repeatingDays).some(Boolean);
export const isOverdueDate = (dueDate, date) => dueDate < date;

export const getArchiveTasks = (tasks) => tasks.filter((task) => task.isArchived);

export const getNotArchiveTasks = (tasks) => tasks.filter((task) => !task.isArchived);

export const getFavoriteTasks = (tasks) => tasks.filter((task) => task.isFavorite);

export const getOverdueTasks = (tasks, date) => tasks.filter((task) => {
  const { dueDate } = task;

  if (!dueDate) {
    return false;
  }

  return isOverdueDate(dueDate, date);
});

export const getRepeatingTasks = (tasks) => tasks.filter((task) => isRepeating(task.repeatingDays));

// export const getTasksInOneDay = (tasks, date) => {
//  return tasks.filter((task) => isOneDay(task.dueDate, date));
// };

export const getTasksByFilter = (tasks, filterType) => {
  const nowDate = new Date();

  switch (filterType) {
    case filterTypes.ALL:
      return getNotArchiveTasks(tasks);
    case filterTypes.ARCHIVE:
      return getArchiveTasks(tasks);
    case filterTypes.FAVORITES:
      return getFavoriteTasks(getNotArchiveTasks(tasks));
    case filterTypes.OVERDUE:
      return getOverdueTasks(getNotArchiveTasks(tasks), nowDate);
    case filterTypes.REPEATING:
      return getRepeatingTasks(getNotArchiveTasks(tasks));
    case filterTypes.TODAY:
      return [];
    default:
      return console.error(`Unexpected filterType: ${filterType}`);
  }
};
