class Api::LinksController < ApplicationController
  before_action :set_link, only: [:show, :update, :destroy]

  def index
    links = Link.order(created_at: :desc, updated_at: :desc)
      .page(params[:page]).per_page(params[:per])
    render_paginated_model_to_json links
  end

  def footer
    render json: Link.where(active: 1)
      .order(created_at: :desc, updated_at: :desc)
  end

  def show
    render json: @link
  end

  def create
    link = Link.new(link_params)
    if link.save
      render json: link
    else
      render_errors link
    end
  end

  def update
    if @link.update(link_params)
      render json: @link
    else
      render_errors @link
    end
  end

  def destroy
    @link.destroy
  end

  private

  def set_link
    @link = Link.find(params[:id])
  end

  def link_params
    params.require(:link)
      .permit(
        :id, :created_at, :updated_at,
        :title, :link, :active, :category
      )
  end
end
