class Api::SpotsController < ApplicationController

    def index
        @spots = Spot.all
    end

    def show
        @spot = Spot.find(params[:id])
        @reviews = Spot.find(params[:id]).reviews
    end

end