import React from 'react';
import Star from './atoms/star';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.isPlaying = false;
  }

  tick() {
    if (!this.isPlaying) return;

    this.props.handleUpdate();
    setTimeout(() => {this.tick();}, 1000 / 30);
  }

  componentDidMount() {
    this.isPlaying = true;
    this.tick();
    document.addEventListener('mousemove', this.props.handleMousemove);
  }

  componentWillUnmount() {
    this.isPlaying = false;
    document.removeEventListener('mousemove', this.props.handleMousemove);
  }

  render() {
    const rows = this.props.starPositions.map((elm) => {
      const style = {
        position: 'absolute',
        left: `${elm[0]}px`,
        top: `${elm[1]}px`
      };

      return (<Star style={style} />);
    });

    return (
        <div>
          <span>x:{this.props.x}</span>, <span>y:{this.props.y}</span>
          {rows}
        </div>
    );
  }
}
