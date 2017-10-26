class Api::HomeownersController < ApplicationController
    before_action :set_homeowner, only: [:destroy, :update, :change_admin_status, :status]

    # NOTE: access_locked?
    #  > true = 1 (status = inactive)
    #  > false = 0 (status = active)
    def index
      users = User.all.order(:name)
      # users = User.all.select('*, NULL as status').order(:name)
      # users.each { |u| u.status = u.access_locked? ? 1 : 0}
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
      if params[:status] == '0'
        @homeowner.lock_access!({ send_instructions: false })
        render json: { status: 1 }
      elsif params[:status] == '1'
        @homeowner.unlock_access!

        # Generate random, long password that the user will never know:
        new_password = Devise.friendly_token(50)
        @homeowner.reset_password(new_password, new_password)

        # Send instructions so user can enter a new password:
        @homeowner.send_reset_password_instructions

        render json: { status: 0 }
      else
        render :json => { :errors => @homeowner.errors.full_messages }
      end
    end

    def unlock
        user = with_reset_password_token(params[:reset_password_token])
        render json: user
    end


    private

        def set_homeowner
            @homeowner = User.find(params[:id])
        end

        def homeowner_params
            params.require(:homeowner)
              .permit(:name, :email, :admin, :address, :number, :title, :status, :isWatch)
        end

end
