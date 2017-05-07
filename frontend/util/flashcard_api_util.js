const FlashcardAPIUtil = {
  changeTierId: (cardId, tierId) => (
    $.ajax({
      type: 'PATCH',
      url: `api/flashcard/${cardId}`,
      data: { cardId, tierId }
    })
  )
};

export default FlashcardAPIUtil;
