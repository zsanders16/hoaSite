class Api::HomePagesController < ApplicationController
  before_action :set_home_page, only: [:show, :update, :destroy]

  def index
    home_pages = HomePage.all.page(params[:page]).per_page(params[:per])
    render json: {
      data: home_pages,
      pagination: {
        total_pages: home_pages.total_pages,
        current_page: home_pages.current_page,
        next_page: home_pages.next_page
      }
    }
  end

  def show
    render json: @home_page
  end

  def create
    home_page = HomePage.new(home_page_params)
    active_home_page_reset home_page
    if home_page.save
      render json: home_page
    else
      render_errors home_page
    end
  end

  def update
    active_home_page_reset @home_page
    if @home_page.update(home_page_params)
      render json: @home_page
    else
      render_errors @home_page
    end
  end

  def destroy
    @home_page.destroy
  end

  def active
    render json: HomePage.where(active: true).limit(1)
  end

  private

  def set_home_page
    @home_page = HomePage.find(params[:id])
  end

  def home_page_params
    params.require(:home_page)
      .permit(
        :id, :title, :body, :active, :attachment, :attachment_name
      )
  end

  def active_home_page_reset(home_page)
    HomePage.all.update(active: false) if home_page.active
  end
end
