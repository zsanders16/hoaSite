# == Schema Information
#
# Table name: ccr_admins
#
#  id           :integer          not null, primary key
#  name         :string           default("ccr")
#  display_name :string           default("CCRs | ByLaws")
#  route        :string           default("/ccrs")
#  security     :string           default("admin")
#  active       :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class CcrAdmin < ApplicationRecord
end
