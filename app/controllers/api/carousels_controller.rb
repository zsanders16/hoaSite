class Api::CarouselsController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  def index
    carousel = Carousel.all.order(:updated_at).page(params[:page]).per_page(params[:per])
    render_paginated_model_to_json(carousel)
  end

  def active
    active_carousel = Carousel
      .where(active: 1)
      .order(:updated_at)
      .page(params[:page]).per_page(params[:per])
    render_paginated_model_to_json(active_carousel)
  end

  def inactive
    inactive_carousel = Carousel
      .where(active: 0)
      .order(:updated_at)
      .page(params[:page]).per_page(params[:per])
    render_paginated_model_to_json(inactive_carousel)
  end

  def show
    render json: @image
  end

  def create
    image = Carousel.new(carousel_params)
    if image.save
      render json: image
    else
      render_errors image
    end
  end

  def update
    if @image.update(carousel_params)
      render json: @image
    else
      render_errors @image
    end
  end

  def destroy
    @image.destroy
  end

  private

  def set_image
    @image = Carousel.find(params[:id])
  end

  def carousel_params
    params.require(:carousel)
      .permit(
        :id, :created_at, :updated_at,
        :filename, :image, :active, :category
      )
  end
end
