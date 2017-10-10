# == Schema Information
#
# Table name: home_pages
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  body            :text             not null
#  active          :integer          default(0)
#  attachment      :text
#  attachment_name :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class HomePage < ApplicationRecord
  validates_presence_of :title, :body
  validates :attachment, presence: true, allow_blank: true
  validates :attachment_name, presence: true, allow_blank: true
  validates :active, presence: true, inclusion: { in: [1, 0] }
end
