import React from 'react';
import Star from '../atoms/star';

export default class Stars extends React.Component {
  render() {
    return (
      <div>
        {this.props.starCoords.map((elm) => {
          const style = {
            position: 'absolute',
            left: `${elm[0]}px`,
            top: `${elm[1]}px`,
            marginTop: '-10px',
            marginLeft: '-10px',
          };

          return (<Star style={style} />);
        })}

        {this.props.children}
      </div>
    );
  }

}
