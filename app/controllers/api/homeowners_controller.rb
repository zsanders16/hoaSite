class Api::HomeownersController < ApplicationController
    before_action :set_homeowner, only: [:destroy, :update, :change_admin_status]
    

    def index
        render json: User.all.order(:name)
    end

    def update
        if @homeowner.update(homeowner_params)
            render json: @homeowner
        else
            render :json => { :errors => @homeowner.errors.full_messages }
        end
    end

    def destroy
        @homeowner.destroy
    end

    private

        def set_homeowner
            @homeowner = User.find(params[:id])
        end

        def homeowner_params
            params.require(:homeowner).permit(:name, :email, :admin)
        end


end
