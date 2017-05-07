@flashcards.each do |flashcard|
  json.set! flashcard.id do
    json.extract! flashcard, :word, :pic, :definition, :sentence, :origin, :deck_id, :tier_id
  end
end
