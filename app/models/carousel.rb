# == Schema Information
#
# Table name: carousels
#
#  id         :integer          not null, primary key
#  filename   :string           not null
#  image      :text             not null
#  active     :integer          default(1), not null
#  category   :string           default("general"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Carousel < ApplicationRecord
  validates_presence_of :filename, :image, :category
  validates :active, inclusion: { in: [0,1] } # 0 = false, 1 = true
end
