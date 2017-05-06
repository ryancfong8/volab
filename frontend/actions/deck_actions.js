import * as deckApiUtil from '../util/deck_api_util.js';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receiveAlldecks = (decks) =>({
  type: RECEIVE_ALL_DECKS,
  decks
});

export const receivedeck = (deck) =>({
  type: RECEIVE_DECK,
  deck
});

export const requestAllDecks = () => dispatch => {
  return deckApiUtil.fetchdecks().then(decks=>dispatch(receiveAlldecks(decks)));
};

export const fetchdeck = (id) => dispatch => {
  return deckApiUtil.fetchdeck(id).then(deck=>dispatch(receivedeck(deck)));
};
