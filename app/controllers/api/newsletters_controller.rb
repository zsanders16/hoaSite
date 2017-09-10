class Api::NewslettersController < ApplicationController
  before_action :set_newsletter, only: [:destroy]
  
  def index
    newsletters = Newsletter.all
    render json: newsletters
  end

  def create
    newsletter = Newsletter.new(newsletter_params)
    binding.pry
    if newsletter.save
      render json: newsletter
    end
  end

  def destroy
    @newsletter.destroy
  end  

  private

    def newsletter_params
      params.require(:newsletter).permit(:name, :attachment)
    end

    def set_newsletter
      @newsletter = Newsletter.find(params[:id])
    end

end
