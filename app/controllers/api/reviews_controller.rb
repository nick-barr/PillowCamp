class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
    end

    def create
        @review = Review.new(review_params)
    
        if @review.save
          login!(@review)
          render "api/spots"
        else
          render json: @review.errors.full_messages, status: 422
        end
      end
    
      private
    
      def review_params
        params.require(:review).permit(:body)
      end
    

end