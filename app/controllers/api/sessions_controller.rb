class Api::SessionsController < ApplicationController

  before_action :ensure_logged_in, only: [:destroy]
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render :json => {} 
    else
      render json: ["Nobody signed in"], status: 404
    end
  end  

end