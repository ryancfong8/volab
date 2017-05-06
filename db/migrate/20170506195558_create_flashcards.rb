class CreateFlashcards < ActiveRecord::Migration[5.0]
  def change
    create_table :flashcards do |t|
      t.string :word
      t.string :pic
      t.string :definition
      t.string :sentence
      t.string :origin
      t.integer :deck_id
      t.integer :tier_id

      t.timestamps
    end
  end
end
