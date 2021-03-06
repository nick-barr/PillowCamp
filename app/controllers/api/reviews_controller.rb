class Api::ReviewsController < ApplicationController

  before_action :ensure_logged_in, only: [:create]
  skip_before_action :verify_authenticity_token

    def index
      if params[:spot_id] == nil 
          @reviews = Review.includes(:user).where(user_id: params[:user_id])
          render :index
        else 
          @reviews = Review.includes(:spot).where(spot_id: params[:spot_id])
          render :index
        end
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

    def destroy
      @review = Review.find(params[:id])
      if @review.destroy && current_user.id == @review.user_id
          # render :show
      else
          render json: @review.errors.full_messages, status: 422
      end
  end
          
      private
    
      def review_params
        params.require(:review).permit(:body, :user_id, :spot_id)
      end
    

end