# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  date        :string           not null
#  description :text             not null
#  active      :boolean          default(TRUE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
    validates :title, presence: true
    validates :date, presence: true
    validates :description, presence: true
    validates :active, inclusion: { in: [true, false] }
end
