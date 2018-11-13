class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: ["User already exists"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :image_url, :password)
  end

end
