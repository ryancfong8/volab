const FlashcardAPIUtil = {
  changeTierId: (cardId, tierId) => (
    $.ajax({
      type: 'PATCH',
      url: `api/flashcard/${cardId}`,
      data: { cardId, tierId }
    })
  ),

  createFlashcard: (data) => (
    $.ajax({method: 'POST', url: `api/deck`, data: {data}})
  )
};

export default FlashcardAPIUtil;
