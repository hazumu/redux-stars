import { createStore, compose } from 'redux';
import reducer from '../reducers/index';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
  return store;
}
