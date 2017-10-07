# == Schema Information
#
# Table name: emails
#
#  id          :integer          not null, primary key
#  subject     :string           not null
#  body        :text             not null
#  recipients  :string
#  attachments :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Email < ApplicationRecord
  include ActionView::Helpers::DateHelper
  validates_presence_of :subject, :body
  validates :recipients, presence: true, allow_blank: true
  validates :attachments, presence: true, allow_blank: true


  def as_json(options={})
    options[:methods] = [:time]
    super
  end

  def time
    time_ago_in_words(created_at)
  end

end
