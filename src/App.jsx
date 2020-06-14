import React from 'react';
import Menu from './components/menu/menu';
import Filters from './components/filters/filters';
import Board from './components/board/board';
import Sorting from './components/sorting/sorting';
import TaskContainer from './components/task-container/task-container';
import Card from './components/card/card';

const App = () => (
  <main className="main">
    <header className="main__control control container">
      <h1 className="control__title">TASKMANAGER</h1>
      <Menu />
    </header>

    <Filters />

    <Board>
      <Sorting />

      <TaskContainer>
        {[...Array(5)].map((item) => <Card {...item} />)}
      </TaskContainer>
    </Board>
  </main>
);

export default App;
