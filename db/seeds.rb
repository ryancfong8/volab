# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "Guest", email: "guest@gmail.com", password: "password"})

Deck.create({title: "deck1"})

Flashcard.create([
  {
  word:"converge",
  pic: "https://s3-us-west-1.amazonaws.com/viscab/Converge.gif",
  origin:"v",
  definition:"Move together to one point, to unite",
  sentence:"Clowns acrossed the country converge together at the clown convention",
  deck_id:1,
  tier_id:1,
  },

  {
  word:"reap",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Reap.png",
  origin:"v",
  definition:"Harvest, gather",
  sentence:"If you work hard you will reap the rewards",
  deck_id:1,
  tier_id:1,
  },

  # {
  # word:"aggregate",
  # pic:" https://s3-us-west-1.amazonaws.com/viscab/aggregate.png",
  # origin:"v, n, adj",
  # definition:"Gather together, whole made of constituent parts, collection of things forming a whole",
  # sentence:"Concrete is created by aggregating stones and glass",
  # deck_id:1,
  # tier_id:1,
  # },

  {
  word:"clinch",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/clinch+.png",
  origin:"v",
  definition:"Make final or settle, fasten or hold together",
  sentence:"The pieced as clinched together by a clamp",
  deck_id:1,
  tier_id:1,
  },


  {
  word:"consolidate",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Consolidate.jpg",
  origin:"v",
  definition:"unite, combine, make coherent",
  sentence:"He consolidated all his notes onto one page",
  deck_id:1,
  tier_id:1,
  },

  {
  word:"lavish",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Lavish2.png",
  origin:"adj, v",
  definition:"abundant, marked by excess",
  sentence:"He had more than enough in his lavish lifestyle",
  deck_id:1,
  tier_id:1,
  },

  {
  word:"satiate",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Satiate.png",
  origin:"v",
  definition:"To fully satisfy",
  sentence:"After not having water for a day, the gallon of water satiated my thirst",
  deck_id:1,
  tier_id:1,
  },

  {
  word:"copious",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Copious.png",
  origin:"adj",
  definition:"plentiful",
  sentence:"She took a copious amount of notes in class",
  deck_id:1,
  tier_id:1,
  },

  {
  word:"slew",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Sketch.png",
  origin:"n",
  definition:"Large number or quantity",
  sentence:"We couldn’t pass the slew of people as it was so crowded",
  deck_id:1,
  tier_id:1,
  },

  {
  word:"saturate",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/saturate.png",
  origin:"v",
  definition:"To soak or imbue thoroughly",
  sentence:"The sponge was saturated and drenched",
  deck_id:1,
  tier_id:1,
  },

  {
  word:"replete",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Replete.png",
  origin:"adj",
  definition:"Supplied in abundance",
  sentence:"The sea is replete with fish",
  deck_id:1,
  tier_id:1,
  },

  # {
  # word:"scant",
  # pic:"
  #
  # ",
  # origin:"adj",
  # definition:"Not enough or barely enough",
  # sentence:"The lady was scant in her revealing clothing",
  # deck_id:1,
  # tier_id:1,
  # },
  #
  # {
  # word:"cogent",
  # pic:"
  #
  # ",
  # origin:"adj",
  # definition:"convincing, logical",
  # sentence:"The cogent gentleman convinced me to buy his goods.",
  # deck_id:1,
  # tier_id:1,
  # },

  {
  word:"sagacious",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Sagacious.png",
  origin:"adj",
  definition:"wise, showing good judgement",
  sentence:"We went to the sagacious sage for advice",
  deck_id:1,
  tier_id:1,
  },

  # {
  # word:"judicious",
  # pic:"
  #
  # ",
  # origin:"adj",
  # definition:"wise, sensible",
  # sentence:"The judicious judge saw through the lies and gave the appropriate verdict",
  # deck_id:1,
  # tier_id:1,
  # },
  #
  # {
  # word:"keen",
  # pic:"
  #
  # ",
  # origin:"adj, v, n",
  # definition:"sharp, intense, moaning",
  # sentence:"Dogs have a keen sense of smell",
  # deck_id:1,
  # tier_id:1,
  # },

  # {
  # word:"rudimentary",
  # pic:"
  #
  # ",
  # origin:"adj",
  # definition:"Elementary",
  # sentence:"My Chinese is rudimentary and can only order food",
  # deck_id:1,
  # tier_id:1,
  # },

  # {
  # word:"spartan",
  # pic:"
  #
  # ",
  # origin:"adj",
  # definition:"very disciplined, austere",
  # sentence:"The apartment was so austere there wasn’t even a bed",
  # deck_id:1,
  # tier_id:1,
  # },

  {
  word:"stark",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Stark.png",
  origin:"adj",
  definition:"complete, total, simple, plain",
  sentence:"He was stark naked with nothing on",
  deck_id:1,
  tier_id:1,
  },

  # {
  # word:"archaic",
  # pic:"
  #
  # ",
  # origin:"adj",
  # definition:"primitive",
  # sentence:"The archaic building was from the 1800’s",
  # deck_id:1,
  # tier_id:1,
  # },

  # {
  # word:"artifact",
  # pic:"
  #
  # ",
  # origin:"n",
  # definition:"object made by humans in earlier times",
  # sentence:"Uncovering artifacts from ancient Egypt",
  # deck_id:1,
  # tier_id:1,
  # },

  {
  word:"retrospective",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Retrospective.png",
  origin:"adj, n",
  definition:"Looking at the past",
  sentence:"The retrospective law punishes violators even before the law was created",
  deck_id:1,
  tier_id:1,
  },

  # {
  # word:"rustic",
  # pic:"
  #
  # ",
  # origin:"adj, n",
  # definition: "primitive, relating to country",
  # sentence:"The rustic cabin in the woods",
  # deck_id:1,
  # tier_id:1,
  # },

  {
  word:"vintage",
  pic:" https://s3-us-west-1.amazonaws.com/viscab/Vintage.png",
  origin:"adj, n",
  definition:"of high quality from an earlier era",
  sentence:"The vintage car still goes for a lot of money now days",
  deck_id:1,
  tier_id:1,
  }

  # {
  # word:"unprecedented",
  # pic:"
  #
  # ",
  # origin:"adj",
  # definition:"never before known or seen",
  # sentence:"Noone knew how to react to the  unprecedented move",
  # deck_id:1,
  # tier_id:1,
  # }
  ])
