# == Schema Information
#
# Table name: ccrs
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  attachment :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ccr < ApplicationRecord
    validates :name, presence: true
end
