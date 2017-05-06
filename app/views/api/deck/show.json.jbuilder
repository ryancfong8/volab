json.extract! @deck, :id, :title
json.flashcards @deck.flashcards do |flashcard|
  json.id flashcard.id
  json.word
  json.picture flashcard.picture
  json.definition flashcard.definition
  json.sentence flashcard.sentence
  json.origin flashcard.origin
end
