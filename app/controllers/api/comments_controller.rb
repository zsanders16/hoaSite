class Api::CommentsController < ApplicationController
    before_action :set_message
    before_action :set_comment, only: [:destroy]
    
    
    def index
        comments = @message.comments
        render json: comments
    end

    def create
        comment = @messge.comment.new(comment_params)
        if comment.save
            render json: comment
        else
            render :json => { :errors => comment.errors.full_messages }
        end
    end

    def destroy
        @comment.destroy
    end

    private

        def set_message
            @message = Message.find(params[:message_id])
        end

        def set_comment
            @comment = @message.comments.find(params[:id])
        end

        def comment_params
            params.require(:comment).permit(:content, :user_created)
        end
end
