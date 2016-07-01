import React from 'react';

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
    let rows = this.props.circlePositions.map((elm) => {
      let style = {
        position: 'absolute',
        left: `${elm[0]}px`,
        top: `${elm[1]}px`
      };

      return (<img src="./img/star.svg" style={style} width="20" />);
    });

    return (
        <div>
          <span>x:{this.props.x}</span>, <span>y:{this.props.y}</span>
          <br />
          {rows}
        </div>
    );
  }
}
