import { RECEIVE_DECK } from '../actions/deck_actions.js';
// import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW_ERRORS } from '../actions/review_actions';
import { merge } from 'lodash';

const nullDeck = {
  id: "",
  title: "",
  flashcards: {}
};

const toObj = flashcards => {
  let res = {};
  flashcards.forEach(c => {
    if (!res[c.tier_id]) {
      res[c.tier_id] = [];
    }
    res[c.tier_id].push(c);
  });
  return res;
};

const deckReducer = (oldState = nullDeck, action) => {
  Object.freeze(oldState);
  let newdeck;
  switch(action.type){
    case RECEIVE_DECK:
      newdeck = merge({}, oldState);
      newdeck.flashcards = toObj(action.deck.flashcards);
      return newdeck;
    // case RECEIVE_FLASHCARD:
    //   newDeck = merge({}, oldState);
    //   newdeck.reviews.push(action.review);
    //   return newdeck;
    // case REMOVE_FLASHCARD:
    //   newDeck = merge({}, oldState);
    //   let index = newdeck.reviews.indexOf(action.review);
    //   newdeck.reviews.splice(index, 1);
    //   return newdeck;
    default:
      return oldState;
  }
};

export default deckReducer;
