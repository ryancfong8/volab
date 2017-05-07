json.extract! @deck, :id, :title
json.flashcards @deck.flashcards do |flashcard|
  json.id flashcard.id
  json.word flashcard.word
  json.pic flashcard.pic
  json.definition flashcard.definition
  json.sentence flashcard.sentence
  json.origin flashcard.origin
  json.deck_id flashcard.deck_id
  json.tier_id flashcard.tier_id
end
