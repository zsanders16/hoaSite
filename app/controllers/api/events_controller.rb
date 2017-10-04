class Api::EventsController < ApplicationController
  before_action :set_event, only: [:update, :destroy]

  def index
    events = Event.all
    render json: events
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
      params.require(:event).permit(:title, :date, :description)
    end

    def set_event
      @event = Event.find(params[:id])
    end

end
