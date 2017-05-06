# == Schema Information
#
# Table name: flashcards
#
#  id         :integer          not null, primary key
#  word       :string
#  pic        :string
#  definition :string
#  sentence   :string
#  origin     :string
#  deck_id    :integer
#  tier_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Flashcard < ApplicationRecord
  belongs_to :deck 
end
