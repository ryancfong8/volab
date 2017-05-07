import { RECEIVE_DECK, RECEIVE_PHOTO } from '../actions/deck_actions.js';
// import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW_ERRORS } from '../actions/review_actions';
import { merge } from 'lodash';

const nullDeck = {
  id: "",
  title: ""
};

const deckReducer = (oldState = nullDeck, action) => {
  Object.freeze(oldState);
  let newdeck;
  switch(action.type){
    case RECEIVE_DECK:
      return merge({}, action.deck);
    // case RECEIVE_FLASHCARD:
    //   newDeck = merge({}, oldState);
    //   newdeck.reviews.push(action.review);
    //   return newdeck;
    // case REMOVE_FLASHCARD:
    //   newDeck = merge({}, oldState);
    //   let index = newdeck.reviews.indexOf(action.review);
    //   newdeck.reviews.splice(index, 1);
    //   return newdeck;
    // case RECEIVE_REVIEW_ERRORS:
    //     return merge({}, oldState, {reviewErrors: action.reviewErrors});
    // case REMOVE_REVIEW_ERRORS:
    //     return merge({}, oldState.reviewErrors, {reviewErrors: []});
    default:
      return oldState;
  }
};

export default deckReducer;