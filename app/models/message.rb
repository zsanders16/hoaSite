# == Schema Information
#
# Table name: messages
#
#  id           :integer          not null, primary key
#  title        :string
#  description  :text
#  user_created :string
#  archive      :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Message < ApplicationRecord
    has_many :comments, dependent: :destroy

end
