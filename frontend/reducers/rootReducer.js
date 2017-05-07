import { combineReducers } from 'redux';

import deckReducer from './deck_reducer';
import decksReducer from './decks_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  deck: deckReducer,
  decks: decksReducer,
  errors: errorsReducer,
  session: sessionReducer
});

export default rootReducer;
