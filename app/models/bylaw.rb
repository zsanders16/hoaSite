# == Schema Information
#
# Table name: bylaws
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  attachment :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bylaw < ApplicationRecord
    validates :name, presence: true
end
