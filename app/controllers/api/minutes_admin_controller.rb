class Api::MinutesAdminController < ApplicationController

    def index
        render json: MinutesAdmin.first
    end

    def update
        minutes = MinutesAdmin.first
        if minutes.update(minutesAdmin_module_params)
            render json: minutes
        else
            render :json => { :errors => minutes.errors.full_messages }
        end
    end


    private

        def minutesAdmin_module_params
            params.require(:minutesAdmin).permit(:security, :active)
        end
end
