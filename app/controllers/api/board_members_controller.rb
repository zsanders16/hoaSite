class Api::BoardMembersController < ApplicationController
  def index
    render json: User.where(admin: true).all
  end
end
