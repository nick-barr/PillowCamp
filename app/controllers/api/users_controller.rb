class Api::UsersController < ApplicationController

  before_action :ensure_logged_in, only: [:show, :index]
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
  
  