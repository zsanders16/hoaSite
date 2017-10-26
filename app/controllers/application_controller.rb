class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :configure_permitted_parameters, if: :devise_controller?

  def render_errors(model)
    render json: { errors: model.errors.full_messages.join(',\n')}, status: 422
  end

  def render_paginated_model_to_json(model)
    render json: {
      data: model,
      pagination: {
        total_pages: model.total_pages,
        current_page: model.current_page,
        next_page: model.next_page
      }
    }
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :address, :number])
  end
end
