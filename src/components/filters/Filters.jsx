import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { getTasks } from '../../redux/tasks/tasks.selectors';
import { getTasksByFilter } from '../../utils/utils';
import { filterTypes } from '../../constants';

const getFiltersCount = (tasks) => Object
  .values(filterTypes)
  .map((filterType) => ({
    name: filterType,
    // TODO need remove recalc array
    count: getTasksByFilter(tasks, filterType).length,
  }));

const renderFilter = (filter) => {
  const { name, count } = filter;
  const isDisabled = count === 0;
  return (
    <div key={name}>
      <input
        type="radio"
        id={`filter__${name}`}
        className="filter__input visually-hidden"
        name="filter"
        disabled={isDisabled}
      />
      <label
        htmlFor={`filter__${name}`}
        className="filter__label"
      >
        {name}
        <span className="filter__all-count">
          &nbsp;
          {count}
        </span>
      </label>
    </div>
  );
};

const renderFilters = (tasks) => getFiltersCount(tasks).map((filter) => renderFilter(filter));

const Filters = ({ tasks }) => (
  <section className="main__filter filter container">
    {renderFilters(tasks)}
  </section>
);

const mapStateToProps = createStructuredSelector({
  tasks: getTasks,
});

Filters.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Filters);
