# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord
  has_many :flashcards
end
