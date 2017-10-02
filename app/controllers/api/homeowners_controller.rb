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
        @homeowner.lock_access!({ send_instructions: false })
        render json: { status: true }
      elsif params[:status] == 'true'
        @homeowner.unlock_access!

        # Generate random, long password that the user will never know:
        new_password = Devise.friendly_token(50)
        @homeowner.reset_password(new_password, new_password)

        # Send instructions so user can enter a new password:
        @homeowner.send_reset_password_instructions

        render json: { status: false }
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
