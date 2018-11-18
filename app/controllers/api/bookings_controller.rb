class Api::BookingsController < ApplicationController

  before_action :ensure_logged_in

  def index
    @bookings = Booking.includes(:property, property: :host)
                .where(user_id: current_user.id)
                .order(check_in: :asc)
  end

  def show
    @booking = current_user.bookings.find(params[:id])
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

  def booking_params
    params.require(:booking).permit(:property_id, :user_id, :check_in, :check_out, :num_people)
  end

end
