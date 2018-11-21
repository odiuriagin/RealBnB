class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    registered_user_photo = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/user_avatars/10.png')
    if @user.save
      login(@user)
      @user.photo.attach(io: registered_user_photo, filename: '10.png')
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :image_url, :password)
  end

end
