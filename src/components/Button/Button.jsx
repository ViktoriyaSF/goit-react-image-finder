import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
