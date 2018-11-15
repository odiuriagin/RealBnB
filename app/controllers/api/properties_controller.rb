class Api::PropertiesController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :update]

  def index
    @properties = Property.all
    render :index
  end

  def show
    @property = Property.find(params[:id])
    render :show
  end

  def create
    @property = Property.new(property_params)
    if @property.save
      render :show
    else
      render json: ["Fields can't be empty"], status: 422
    end
  end

  def update
    @property = current_user.properties.find(params[:id])
    if @property.update_attributes(property_params)
      render :show
    else
      render json: ["Fields can't be empty"], status: 422
    end
  end

  private

  def property_params
    params.require(:property).permit(:city, :state, :zip, :address,
      :description, :host_id, :price, :longitude, :latitude, :wifi,
       :cable_tv, :washer, :kitchen, :breakfast)
  end

end
