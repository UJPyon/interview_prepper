class Submission < ApplicationRecord

  validates :title, :body, :answer, presence: true

  belongs_to :submittor, polymorphic: true
  
end