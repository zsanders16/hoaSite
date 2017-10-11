class Api::RequestsController < ApplicationController

  def index
    admins = User.all.where(admin: true)
    toList = admins.collect do |admin|
      {
        key: admin.id,
        text: "#{admin.name}, (#{admin.email})",
        value: 'devmountaintest@gmail.com'
      }
    end
    render json: toList
  end

  def access
    form_data = request_params
    AccessMailer.access_request(form_data).deliver
    render json: { access_request_sent: true }
  end

  def granted; end

  def denied; end

  private

  def request_params
    params.require(:request).permit(:id, :subject, :from, :to, :message)
  end
end
