import { combineReducers } from 'redux';

import decksReducer from './decks_reducer';
import deckReducer from './deck_reducer';

const rootReducer = combineReducers({
  decks: decksReducer,
  deck: deckReducer

});

export default rootReducer;
