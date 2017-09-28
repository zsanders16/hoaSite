# == Schema Information
#
# Table name: minutes_admins
#
#  id           :integer          not null, primary key
#  name         :string           default("minutes")
#  display_name :string           default("Meeting Minutes")
#  route        :string           default("/minutes")
#  security     :string           default("admin")
#  active       :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class MinutesAdmin < ApplicationRecord
end
