import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/star'
import Star from '../components/atoms/star';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleMousemove: (e) => { dispatch(AppActions.mousemove(e)) },
    handleUpdate: () => { dispatch(AppActions.update()) }
  }
}

function star(Component) {
  class StarryComponent extends Component {
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
      const rows = this.props.star.starPositions.map((elm) => {
        const style = {
          position: 'absolute',
          left: `${elm[0]}px`,
          top: `${elm[1]}px`
        };

        return (<Star style={style} />);
      });

      return (
          <div>
            {rows}
            <Component>
            </Component>
          </div>
      );
    }
  }

  return StarryComponent;
}

const StarryApp = star(App);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarryApp)
