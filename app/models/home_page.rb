# == Schema Information
#
# Table name: home_pages
#
#  id                 :integer          not null, primary key
#  title              :string
#  body               :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class HomePage < ApplicationRecord
  validates_presence_of :title, :body
  validates :attachment, presence: true, allow_blank: true
  validates :attachment_name, presence: true, allow_blank: true
  validates :active, presence: true, inclusion: { in: [true,false] }

end
