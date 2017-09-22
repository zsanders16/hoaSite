class Api::MessagesController < ApplicationController
    before_action :set_message, only: [:show, :destroy] 

    def index
        render json: Message.all
    end

    def show
        render json: @message
    end

    def create
        message = Message.new
        if message.save
            render json: message
        else
            render :json => { :errors => message.errors.full_messages }
        end
    end

    def destroy
        @message.destroy
    end

    private 

        def set_message
            @message = Message.find(params[:id])
        end


end
