# == Schema Information
#
# Table name: newsletters_admins
#
#  id           :integer          not null, primary key
#  name         :string           default("newsletter")
#  display_name :string           default("Newsletters")
#  route        :string           default("/newsletters")
#  security     :string           default("admin")
#  active       :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class NewslettersAdmin < ApplicationRecord
end
