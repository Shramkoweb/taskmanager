import React from 'react';
import Menu from './components/menu/menu';
import Filters from './components/filters/filters';

const App = () => (
  <main className="main">
    <header className="main__control control container">
      <h1 className="control__title">TASKMANAGER</h1>
      <Menu />
    </header>

    <Filters />

    {/* Контент */}
  </main>
);

export default App;
