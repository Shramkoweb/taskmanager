import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changeSortType } from '../../redux/tasks/tasks.actions';
import { getSortType } from '../../redux/tasks/tasks.selectors';
import sortTypes from '../../constants';

const sortTypeValues = Object.values(sortTypes);
const renderSortButtons = (types, onClick, currentSortType) => types.map((type) => (
  <button
    key={type}
    onClick={onClick}
    className={cn('board__filter', {
      'board__filter--active': currentSortType === type,
    })}
    type="button"
    data-sort-type={type}
  >
    {`SORT BY ${type}`}
  </button>
));

const Sorting = ({ onChangeSortType, currentSortType }) => {
  const handleClick = ({ target }) => {
    onChangeSortType(target.dataset.sortType);
  };

  return (
    <div className="board__filter-list">
      {renderSortButtons(sortTypeValues, handleClick, currentSortType)}
    </div>
  );
};

Sorting.propTypes = {
  onChangeSortType: PropTypes.func.isRequired,
  currentSortType: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentSortType: getSortType,
});

const mapDispatchToProps = {
  onChangeSortType: changeSortType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
