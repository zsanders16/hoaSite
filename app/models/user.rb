# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  provider               :string           default("email"), not null
#  uid                    :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  name                   :string
#  nickname               :string
#  image                  :string
#  email                  :string
#  admin                  :integer          default(0)
#  tokens                 :json
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  address                :string
#  number                 :string
#  failed_attempts        :integer          default(0), not null
#  unlock_token           :string
#  locked_at              :datetime
#  title                  :string
#  status                 :integer          default(1)
#  isWatch                :integer          default(0)
#

class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable, :lockable
  include DeviseTokenAuth::Concerns::User

  attr_accessor :status

  after_create :set_status_locked!
  after_update :set_status_attribute
  after_save :set_status_attribute
  after_initialize :set_status_attribute
  after_find :set_status_attribute

  private

  def set_status_attribute
    self.status = self.access_locked? ? 1 : 0
  end

  def set_status_locked!
    self.lock_access!({ send_instructions: false })
    self.status = self.access_locked? ? 1 : 0
  end
end
