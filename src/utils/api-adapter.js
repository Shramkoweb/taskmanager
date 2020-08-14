import cloneDeep from 'lodash/cloneDeep';

const adaptTasksResponse = (apiResponse) => {
  const response = cloneDeep(apiResponse);

  return response.map((item) => ({
    color: item.color,
    description: item.description,
    dueDate: item['due_date'],
    id: item.id,
    isArchived: item['is_archived'],
    isFavorite: item['is_favorite'],
    repeatingDays: item['repeating_days'],
  }));
};

export default adaptTasksResponse;
