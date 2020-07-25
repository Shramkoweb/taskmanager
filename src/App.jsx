import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Menu from './components/menu/Menu';
import Filters from './components/filters/Filters';
import Board from './components/board/Board';
import Sorting from './components/sorting/Sorting';
import TaskContainer from './components/task-container/TaskContainer';
import Card from './components/card/Card';
import LoadMore from './components/load-more/LoadMore';

import { fetchTasks } from './redux/tasks/tasks.actions';
import { getTaskItems } from './redux/tasks/tasks.selectors';

const App = ({ tasks }) => {
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

        <TaskContainer>
          {
            tasks.length
              ? tasks.map((task) => <Card key={task.id} card={task} />)
              : 'Loading...'
          }

          {
            tasks.length > 8 && <LoadMore />
          }
        </TaskContainer>
      </Board>
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  tasks: getTaskItems,
});

export default connect(mapStateToProps)(App);
