import FlashcardAPIUtil from '../util/flashcard_api_util';

export const changeTierId = (cardId, tierId)  => dispatch => (
  FlashcardAPIUtil
    .changeTierId(cardId, tierId)
);
