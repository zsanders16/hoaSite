class Api::NewslettersController < ApplicationController
  before_action :set_newsletter, only: [:destroy]
  
  def index
    newsletters = Newsletter.all
    render json: newsletters
  end

  def create
    newsletter = Newsletter.new(newsletter_params)
    if newsletter.save
      render json: newsletter
    end
  end

  def destroy
    binding.pry
    @newsletter.destroy
  end  

  #custom method

  def download
    binding.pry
    id = params['newsletter']['newsletter']['id']
    url = params['newsletter']['newsletter']['attachment']['url']
    binding.pry
    data = open(File.join(Rails.root, url))


    binding.pry
    
  end

  private

    def newsletter_params
      params.require(:newsletter).permit(:name, :attachment)
    end

    def download_params
      
    end

    def set_newsletter
      @newsletter = Newsletter.find(params[:id])
    end

end
