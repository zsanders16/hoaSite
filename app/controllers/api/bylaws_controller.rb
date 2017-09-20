class Api::BylawsController < ApplicationController
    before_action :set_bylaws, only: [:show, :destroy]
    
    
      def index
        bylaws = Bylaw.all
        bylaws.each { | bylaw | bylaw["attachment"] = [] }
        render json: bylaws
      end
    
      def show
        render json: @bylaw
      end
    
      def create
        bylaw = Bylaw.new(bylaws_params)
        if bylaw.save
          render json: bylaw
        end
      end
    
      def destroy
        @bylaw.destroy
      end
    
      private
    
        def bylaws_params
          params.require(:bylaw).permit(:name, :attachment)
        end
    
        def set_bylaws
          @bylaw = Bylaw.find(params[:id])
        end
end
