class Api::ReviewsController < ApplicationController

  before_action :ensure_logged_in
  skip_before_action :verify_authenticity_token

    def index
        @reviews = Review.includes(:user).where(user_id: params[:user_id])
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
          render :show
        else
          render json: @review.errors.full_messages, status: 422
        end
      end

      def show
        @booking = Booking.find(params[:id]) 
        render 'api_bookings_url'
      end
          
      private
    
      def review_params
        params.require(:review).permit(:body, :user_id, :spot_id)
      end
    

end