import React from 'react';
import { connect } from 'react-redux';
import App from '../components/app';
import { mousemove, update, initializeStar, didStarsUnmounted } from '../actions/actionCreators';
import Stars from '../components/molecules/stars';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleMousemove: (e) => { dispatch(mousemove(e)); },
    handleUpdate: () => { dispatch(update()); },
    handleInitializeStar: () => { dispatch(initializeStar()); },
    handleDidStarsUnmounted: () => { dispatch(didStarsUnmounted()); },
  };
}

function star(Component) {
  return class StarryComponent extends React.Component {
    static get FPS() {
      return 30;
    }

    tick() {
      if (this.props.star.isEnabled) {
        this.props.handleUpdate();
        setTimeout(() => { this.tick(); }, 1000 / StarryComponent.FPS);
      } else {
        this.props.handleInitializeStar();
      }
    }

    componentDidMount() {
      this.tick();
      document.addEventListener('mousemove', this.props.handleMousemove);
    }

    componentWillUnmount() {
      this.props.handleDidStarsUnmounted();
      document.removeEventListener('mousemove', this.props.handleMousemove);
    }

    render() {
      return (
        <Stars starCoords={this.props.star.starCoords}>
          <Component />
        </Stars>
      );
    }
  };
}

const StarryApp = star(App);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarryApp);
