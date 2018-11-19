class Api::ReviewsController < ApplicationController

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
