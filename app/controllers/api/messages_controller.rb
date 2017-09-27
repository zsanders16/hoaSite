class Api::MessagesController < ApplicationController
    before_action :set_message, only: [:show, :update, :destroy] 

    def index
        not_archived_list = Message.all.select { |message| message.archive == false }
        render json: not_archived_list
    end

    def archivedMessages
        archived_list = Message.all.select { |message| message.archive == true }
        render json: archived_list
    end

    def show
        render json: @message
    end

    def create
        message = Message.new(message_params)
        if message.save
            render json: message
        else
            render :json => { :errors => message.errors.full_messages }
        end
    end

    def update
        if @message.update(message_params)
            render json: @message
        else
            render :json => { :errors => @message.errors.full_messages }
        end
    end
        

    def destroy
        @message.destroy
    end

    private 

        def message_params
            params.require(:message).permit(:title, :description, :archive)
        end

        def set_message
            @message = Message.find(params[:id])
        end
        
end
