class Api::MinutesController < ApplicationController

    before_action :set_minutes, only: [:show, :update, :destroy]
    
    def index
        minutes = Minute.all
        minutes.each { | minutes | minutes["attachment"] = [] }
        render json: minutes
    end

    def index_non_admin
        minutes = Minute.where(isAdmin: false)
        minutes.each { | minutes | minutes["attachment"] = [] }
        render json: minutes
    end

    def show
        render json: @minutes
    end

    def create
        minutes = Minute.new(minutes_params)
        if minutes.save
            render json: minutes
        end
    end

    def update
        if @minutes.update(minutes_params)
            render json: @minutes
        else
            render :json => { :errors => @minutes.errors.full_messages }
        end
    end

    def destroy
        @minutes.destroy
    end

    private

        def minutes_params
            params.require(:minutes).permit(:name, :attachment, :isAdmin)
        end

        def set_minutes
            @minutes = Minute.find(params[:id])
        end
end
