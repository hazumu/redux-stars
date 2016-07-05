import React, { PropTypes } from 'react';
import Star from '../atoms/star';

export default function Stars({ starCoords, children }) {
  return (
    <div>
      {starCoords.map((elm) => {
        const style = {
          position: 'absolute',
          left: `${elm[0]}px`,
          top: `${elm[1]}px`,
          marginTop: '-10px',
          marginLeft: '-10px',
        };

        return (<Star style={style} />);
      })}

      {children}
    </div>
  );
}

Stars.propTypes = {
  starCoords: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired,
};
