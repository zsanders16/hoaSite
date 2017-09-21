class Api::LegalAdminController < ApplicationController

    def index
        render json: LegalAdmin.first
    end

    def update
        legal = LegalAdmin.first
        if legal.update(legalAdmin_module_params)
            render json: legal
        else
            render :json => { :errors => legal.errors.full_messages }
        end
    end


    private

        def legalAdmin_module_params
            params.require(:legalAdmin).permit(:security, :active)
        end
end
