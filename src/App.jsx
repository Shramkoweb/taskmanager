import React from 'react';

import Menu from './components/menu/Menu';
import Filters from './components/filters/Filters';
import Board from './components/board/Board';
import Sorting from './components/sorting/Sorting';
import TaskContainer from './components/task-container/TaskContainer';
import Card from './components/card/Card';
import LoadMore from './components/load-more/LoadMore';

const App = () => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch('https://11.ecmascript.pages.academy/task-manager/tasks', {
      headers: {
        Authorization: 'Basic er883jdzbdw',
      },
    })
      .then((response) => response.json())
      .then(setCards);
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
            cards.length
              ? cards.map((card) => <Card key={card.id} card={card} />)
              : 'Loading...'
          }

          {
            cards.length > 8 && <LoadMore/>
          }
        </TaskContainer>
      </Board>
    </main>
  );
};

export default App;
