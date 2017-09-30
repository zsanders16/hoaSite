class Api::EmailsController < ApplicationController
  before_action :set_email, only: [:show, :update, :destroy]

  def index
    emails = Email.all.page(params[:page]).per_page(params[:per])
    render json: {
      data: emails,
      pagination: {
        total_pages: emails.total_pages,
        current_page: emails.current_page,
        next_page: emails.next_page,
      }
    }
  end

  def show
    render json: @email
  end

  def create
    email = Email.create(email_params)
    if email.save
      render json: email
    else
      render_errors email
    end
  end

  def update
    if @email.update(email_params)
      render json: @email
    else
      render_errors @email
    end
  end

  def destroy
    @email.destroy
  end

  def homeowners; end

  def commitee; end

  private

  def set_email
    @email = Email.find(params[:id])
  end

  def email_params
    params.require(:email)
      .permit(:id, :subject, :body, :recipients, :attachments)
  end
end
