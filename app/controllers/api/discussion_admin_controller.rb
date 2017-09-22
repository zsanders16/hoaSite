class Api::DiscussionAdminController < ApplicationController

    def index
        render json: DiscussionAdmin.first
    end

    def update
        discussion = DiscussionAdmin.first

        if discussion.update(discussionAdmin_module_params)
            render json: discussion
        else
            render :json => { :errors => discussion.errors.full_messages }
        end
    end

    private

        def discussionAdmin_module_params
            params.require(:discussionAdmin).permit(:security, :active)
        end
end
