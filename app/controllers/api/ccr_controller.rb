class Api::CcrController < ApplicationController
  before_action :set_ccr, only: [:show, :destroy]


  def index
    ccrs = Ccr.all
    ccrs.each { | ccr | ccr["attachment"] = [] }
    render json: ccrs
  end

  def show
    render json: @ccr
  end

  def create
    ccr = Ccr.new(ccrs_params)
    if ccr.save
      render json: ccr
    end
  end

  def destroy
    @ccr.destroy
  end

  private

    def ccrs_params
      params.require(:ccr).permit(:name, :attachment)
    end

    def set_ccr
      @ccr = Ccr.find(params[:id])
    end
end
