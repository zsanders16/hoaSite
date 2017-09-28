# == Schema Information
#
# Table name: discussion_admins
#
#  id           :integer          not null, primary key
#  name         :string           default("discussion")
#  display_name :string           default("Discussion Forum")
#  route        :string           default("/discussion")
#  security     :string           default("admin")
#  active       :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class DiscussionAdmin < ApplicationRecord
end
