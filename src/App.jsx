import React from 'react';
import { useDispatch } from 'react-redux';

import Menu from './components/menu/Menu';
import Filters from './components/filters/Filters';
import Board from './components/board/Board';
import Sorting from './components/sorting/Sorting';
import TaskContainer from './components/task-container/TaskContainer';

import { fetchTasks } from './redux/tasks/tasks.actions';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <main className="main">
      <header className="main__control control container">
        <h1 className="control__title">TASKMANAGER</h1>
        <Menu />
      </header>

      <Filters />

      <Board>
        <Sorting />

        <TaskContainer />
      </Board>
    </main>
  );
};

export default App;
