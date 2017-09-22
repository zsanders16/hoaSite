class Api::LegalController < ApplicationController

    before_action :set_legal, only: [:show, :destroy]
    
    
    def index
        legal = Legal.all
        legal.each { | legal | legal["attachment"] = [] }
        render json: legal
    end

    def show
        render json: @legal
    end

    def create
        legal = Legal.new(legal_params)
        if legal.save
            render json: legal
        end
    end

    def destroy
        @legal.destroy
    end

    private

        def legal_params
            params.require(:legal).permit(:name, :attachment)
        end

        def set_legal
            @legal = Legal.find(params[:id])
        end
end
