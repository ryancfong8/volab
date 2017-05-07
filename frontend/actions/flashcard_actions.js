import FlashcardAPIUtil from '../util/flashcard_api_util';

export const RECEIVE_FLASHCARD = 'RECEIVE_FLASHCARD';

export const receiveFlashcard = (flashcard) =>({
  type: RECEIVE_FLASHCARD,
  flashcard
});

export const changeTierId = (cardId, tierId)  => dispatch => (
  FlashcardAPIUtil
    .changeTierId(cardId, tierId)
);

export const createFlashcard= (data) => dispatch =>  {
  return FlashcardAPIUtil.createFlashcard(data).then(flashcard => dispatch(receiveFlashcard(flashcard)));
};
