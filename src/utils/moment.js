import moment from 'moment';

const getNowDate = () => moment();

const formatDueDate = (dueDate) => {
  // task with dueDate === null is "repeating" and have repeatingDays without dueDate
  if (!dueDate) {
    return { date: 'repeating', time: null };
  }

  const date = moment(dueDate).format('D MMMM YYYY');
  const time = moment(dueDate).format('HH:MM');

  return { date, time };
};

export {
  getNowDate,
  formatDueDate,
};
