class HomePage < ApplicationRecord
  has_attached_file :image, default_url: "/client/public/favicon.ico"
  def before_image_post_process
    ! %w(image/jpeg image/png image/giff image/ico).include?(asset_content_type)
  end

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_presence_of :title, :body

end
