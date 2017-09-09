class Api::NewslettersAdminController < ApplicationController

    def index
        render json: NewslettersAdmin.first
    end

    def update
        newsletter = NewslettersAdmin.first

        if newsletter.update(newslettersAdmin_module_params)
            render json: newsletter
        else
            render :json => { :errors => newsletter.errors.full_messages }
        end
    end


    private

        def newslettersAdmin_module_params
            params.require(:newsletterAdmin).permit(:security, :active)
        end

end
