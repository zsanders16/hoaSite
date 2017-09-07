class Api::AdminModulesStatusController < ApplicationController
    
    def newsletters
        render json: NewslettersAdmin.first
    end

    def updateNewslettersActiveStatus
        binding.pry
        newsletter = NewslettersAdmin.first
        newsletter.active = !newsletter.active
        if newsletter.save
            render json: NewslettersAdmin.first
        else
            render :json => { :errors => newsletter.errors.full_messages }
        end
    end


end
