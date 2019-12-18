# == Schema Information
#
# Table name: submissions
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  body         :string           not null
#  answer       :string           not null
#  submittor_id :integer          not null
#  box_id       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Submission < ApplicationRecord

  validates :title, :body, :answer, :submittor_id, :box_id, presence: true

  belongs_to :submittor,
  primary_key: :id,
  foreign_key: :submittor_id,
  class_name: :User

  belongs_to :box,
  primary_key: :id,
  foreign_key: :box_id,
  class_name: :Box

end
