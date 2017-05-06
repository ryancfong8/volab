# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Deck.create({title: "deck1"})

Flashcard.create(
{ word: "ryan",
  definition: "a cool guy",
  sentence: "Ryan is a cool guy",
  origin: "Born 1993",
  deck_id: 1,
  tier_id: 1
  })
