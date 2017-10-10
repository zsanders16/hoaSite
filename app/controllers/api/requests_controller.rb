class Api::RequestsController < ApplicationController

  def index
    admins = User.all.where(admin: true)
    toList = admins.collect do |admin|
      {
        key: admin.id,
        text: admin.email,
        value: 'devmountaintest@gmail.com'
      }
    end
    render json: toList
  end

  def send
    # TODO: recieve email and send to administrator
  end
end
