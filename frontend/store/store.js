// Libraries
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import DevTools from '../components/devtools/DevTools';


const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
);

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    enhancer
  )
);

export default configureStore;
