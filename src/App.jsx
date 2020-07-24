import React from 'react';
import { connect } from 'react-redux';

import Menu from './components/menu/Menu';
import Filters from './components/filters/Filters';
import Board from './components/board/Board';
import Sorting from './components/sorting/Sorting';
import TaskContainer from './components/task-container/TaskContainer';
import Card from './components/card/Card';
import LoadMore from './components/load-more/LoadMore';
import { makeTest } from './redux/tasks/tasks.actions';

import Api from './api';

const api = new Api('https://11.ecmascript.pages.academy/task-manager');

const App = (props) => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getTasks()
      .then(({ data }) => setCards(data));
  }, []);

  const onTitleClick = () => {
    const { dispatch } = props;

    dispatch(makeTest());
  };

  return (
    <main className="main">
      <header className="main__control control container">
        <h1 onClick={onTitleClick} className="control__title">TASKMANAGER</h1>
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
            cards.length > 8 && <LoadMore />
          }
        </TaskContainer>
      </Board>
    </main>
  );
};

export default connect()(App);
