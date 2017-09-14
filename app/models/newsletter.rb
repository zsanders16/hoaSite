class Newsletter < ApplicationRecord
    mount_base64_uploader :attachment, AttachmentUploader
    validates :name, presence: true
end
