import React from 'react';

export default class Star extends React.Component {

  render() {
    return (
        <img src="./img/star.svg" style={this.props.style} width="20" />
    );
  }

}
