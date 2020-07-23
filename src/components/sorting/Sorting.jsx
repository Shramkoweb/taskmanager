import React from 'react';

const Sorting = () => (
  <div className="board__filter-list">
    <button className="board__filter" type="button" data-sort-type="default">SORT BY DEFAULT</button>
    <button className="board__filter" type="button" data-sort-type="date-up">SORT BY DATE up</button>
    <button className="board__filter" type="button" data-sort-type="date-down">SORT BY DATE down</button>
  </div>
);

export default Sorting;
