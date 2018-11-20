class Api::ReviewsController < ApplicationController

  before_action :ensure_logged_in

  def index
    @reviews = Review.all.includes(:user)
  end

  def show

  end

  def create

  end

  def destroy

  end


end
