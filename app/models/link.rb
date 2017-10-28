# == Schema Information
#
# Table name: links
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  link       :string           not null
#  active     :integer          default(1), not null
#  category   :string           default("general"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Link < ApplicationRecord
  validates_presence_of :link, :title, :category
  validates :active, inclusion: { in: [1, 0] }
end
