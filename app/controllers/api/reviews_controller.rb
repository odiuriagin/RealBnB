class Api::ReviewsController < ApplicationController

  before_action :ensure_logged_in

  def index

  end

  def show

  end

  def create
    @review = Review.new(review_params)
    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def review_params
    params.require(:review).permit(:property_id, :user_id, :body, :accuracy, :location, :communication, :check_in, :value)
  end


end
