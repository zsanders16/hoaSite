# == Schema Information
#
# Table name: minutes
#
#  id         :integer          not null, primary key
#  name       :string
#  attachment :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Minute < ApplicationRecord
end
