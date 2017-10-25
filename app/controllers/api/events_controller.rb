class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
    events = Event.all
    render json: events
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

  def active
    render json: Event.where(active: true).limit(5)
  end

  private

    def event_params
      params.require(:event).permit(:id, :title, :date, :description, :active)
    end

    def set_event
      @event = Event.find(params[:id])
    end

end
