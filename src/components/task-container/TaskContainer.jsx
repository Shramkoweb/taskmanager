import PropTypes from 'prop-types';
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Card from '../card/Card';
import LoadMore from '../load-more/LoadMore';
import { getSortedTasks } from '../../redux/tasks/tasks.selectors';

const TaskContainer = ({ tasks }) => (
  <div className="board__tasks">
    {
      tasks.length
        ? tasks.map((task) => <Card key={task.id} card={task} />)
        : 'Loading...'
    }

    {
      tasks.length > 8 && <LoadMore />
    }
  </div>
);

TaskContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  tasks: getSortedTasks,
});

export default connect(mapStateToProps)(TaskContainer);
