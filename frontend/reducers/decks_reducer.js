import { RECEIVE_ALL_DECKS } from '../actions/deck_actions.js';
import merge from 'lodash/merge';


const decksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_DECKS:
      return merge({}, action.decks);
    default:
      return oldState;
  }
};

export default decksReducer;
