class Api::ReviewsController < ApplicationController

  before_action :ensure_logged_in

  def create
    @review = Review.new(review_params)
    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:property_id, :user_id, :body, :accuracy, :location, :communication, :check_in, :value)
  end


end
