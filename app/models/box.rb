# == Schema Information
#
# Table name: boxes
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Box < ApplicationRecord
  validates :name, :description, presence: true

  has_many :submissions,
  primary_key: :id,
  foreign_key: :box_id,
  class_name: :Submission
  
end
