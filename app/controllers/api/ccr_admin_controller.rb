class Api::CcrAdminController < ApplicationController

    def index
        render json: CcrAdmin.first
    end

    def update
        ccr = CcrAdmin.first

        if ccr.update(ccrAdmin_module_params)
            render json: ccr
        else
            render :json => { :errors => ccr.errors.full_messages }
        end
    end

    private

        def ccrAdmin_module_params
            params.require(:ccrAdmin).permit(:security, :active)
        end


end
