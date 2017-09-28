# == Schema Information
#
# Table name: comments
#
#  id           :integer          not null, primary key
#  content      :text
#  user_created :string
#  message_id   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ApplicationRecord
  include ActionView::Helpers::DateHelper
  belongs_to :message

  def as_json(options={})
    options[:methods] = [:time]
    super
  end

  def time
    time_ago_in_words(created_at)
  end


end
