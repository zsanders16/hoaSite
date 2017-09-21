class Api::MinutesController < ApplicationController

    before_action :set_minutes, only: [:show, :destroy]
    
    def index
    minutes = Minute.all
    minutes.each { | minutes | minutes["attachment"] = [] }
    render json: minutes
    end

    def show
    render json: @minutes
    end

    def create
    minutes = minutes.new(minutes_params)
    if minutes.save
        render json: minutes
    end
    end

    def destroy
    @minutes.destroy
    end

    private

        def minutes_params
            params.require(:minutes).permit(:name, :attachment)
        end

        def set_minutes
            @minutes = minutes.find(params[:id])
        end
end
