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
  has_attached_file :image, default_url: "/client/public/favicon.ico"
  def before_image_post_process
    ! %w(image/jpeg image/png image/giff image/ico).include?(asset_content_type)
  end

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_presence_of :title, :body

end
