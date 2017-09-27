class Message < ApplicationRecord
    has_many :comments, dependent: :destroy

end
