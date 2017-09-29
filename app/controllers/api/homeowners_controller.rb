class Api::HomeownersController < ApplicationController
    before_action :set_homeowner, only: [:destroy, :update, :change_admin_status, :status]

    def index
      users = User.all.select('*, NULL as status').order(:name)
      users.each { |u| u.status = u.access_locked? }
      render json: users
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

    def status
      if params[:status] == 'false'
        @homeowner.lock_access!({ send_instructions: true })
        render json: { status: 'true' }
      elsif params[:status] == 'true'
        @homeowner.unlock_access!
        render json: { status: 'false' }
      else
        # render :json => { :errors => @homeowner.errors.full_messages }
      end
    end

    private

        def set_homeowner
            @homeowner = User.find(params[:id])
        end

        def homeowner_params
            params.require(:homeowner).permit(:name, :email, :admin, :address, :number)
        end

end
