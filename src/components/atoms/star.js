import React, { PropTypes } from 'react';

export default function Star({ style }) {
  return (
    <img src="./img/star.svg" style={style} width="20" role="presentation" />
  );
}

Star.propTypes = {
  style: PropTypes.object.isRequired,
};
