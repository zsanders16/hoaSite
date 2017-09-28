# == Schema Information
#
# Table name: legals
#
#  id         :integer          not null, primary key
#  name       :string
#  attachment :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Legal < ApplicationRecord
end
