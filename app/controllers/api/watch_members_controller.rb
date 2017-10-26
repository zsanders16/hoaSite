class Api::WatchMembersController < ApplicationController
  def index
    
    list = User.where(isWatch: 1)
    new_list = []
    list.each do |user|
      modUser = {name: user.name}
      new_list << modUser
    end
    render json: new_list
  end
end
