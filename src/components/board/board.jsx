import PropTypes from 'prop-types';
import React from 'react';

const Board = ({ children }) => (
  <section className="board container">
    {children}
  </section>
);

export default Board;

Board.propTypes = {
  children: PropTypes.node.isRequired,
};
