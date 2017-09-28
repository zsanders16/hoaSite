# == Schema Information
#
# Table name: legal_admins
#
#  id           :integer          not null, primary key
#  name         :string           default("legal")
#  display_name :string           default("Legal")
#  route        :string           default("/legal")
#  security     :string           default("admin")
#  active       :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class LegalAdmin < ApplicationRecord
end
