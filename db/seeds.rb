# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Deck.create({title: "deck1"})

Flashcard.create([
{ word: "ryan",
  definition: "a cool guy",
  sentence: "Ryan is a cool guy",
  origin: "Born Feb 1993",
  deck_id: 1,
  tier_id: 1
  },
  {
    word: "byron",
      definition: "a smart guy",
      sentence: "Byron is a smart guy",
      origin: "Born Aug 1993",
      deck_id: 1,
      tier_id: 4
    },
    {
      word: "ngoc",
        definition: "a smart guy",
        sentence: "Byron is a smart guy",
        origin: "Born Aug 1993",
        deck_id: 1,
        tier_id: 3
      },
      {
        word: "tyler",
          definition: "a smart guy",
          sentence: "Byron is a smart guy",
          origin: "Born Aug 1993",
          deck_id: 1,
          tier_id: 2
        }])
