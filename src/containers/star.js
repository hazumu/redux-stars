import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/star'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleMousemove: (e) => { dispatch(AppActions.mousemove(e)) },
    handleUpdate: () => { dispatch(AppActions.update()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
