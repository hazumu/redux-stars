import React from 'react';
import Star from '../atoms/star';

export default function (props) {
  return (
    <div>
      {props.starCoords.map((elm) => {
        const style = {
          position: 'absolute',
          left: `${elm[0]}px`,
          top: `${elm[1]}px`,
          marginTop: '-10px',
          marginLeft: '-10px',
        };

        return (<Star style={style} />);
      })}

      {props.children}
    </div>
  );
}
