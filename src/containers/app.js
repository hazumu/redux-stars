import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import {mousemove, update} from '../actions/star'
import Stars from '../components/molecules/stars';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleMousemove: (e) => { dispatch(mousemove(e)) },
    handleUpdate: () => { dispatch(update()) }
  }
}

function star(Component) {
  return class StarryComponent extends Component {
    static get FPS() {
      return 30;
    }

    constructor(props) {
      super(props);
      this.isPlaying = false;
    }

    tick() {
      if (!this.isPlaying) return;

      this.props.handleUpdate();
      setTimeout(() => {this.tick();}, 1000 / StarryComponent.FPS);
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
      return (
        <Stars starCoords={this.props.star.starCoords}>
          <Component />
        </Stars>
      );
    }
  }
}

const StarryApp = star(App);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarryApp)
