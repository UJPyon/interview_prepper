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

end
