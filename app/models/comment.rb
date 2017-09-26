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
