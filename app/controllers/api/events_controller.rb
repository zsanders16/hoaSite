class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
    events = Event.all.page(params[:page]).per_page(params[:per])
    render json: {
      data: events,
      pagination: {
        total_pages: events.total_pages,
        current_page: events.current_page,
        next_page: events.next_page
      }
    }
  end

  def show
    render json: @event
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render :json => { :errors => event.errors.full_messages }
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render :json => { :errors => @event.errors.full_messages }
    end
  end

  def destroy
    @event.destroy
  end

  private

    def event_params
      params.require(:event).permit(:id, :title, :date, :description, :active)
    end

    def set_event
      @event = Event.find(params[:id])
    end

end
