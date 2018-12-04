class Api::PropertiesController < ApplicationController

  before_action :ensure_logged_in, only: [:create, :update]

  def index
    @properties = Property.in_bounds(params[:filters][:bounds])
    render :index
  end

  def show
    @property = Property.find(params[:id])
    render :show
  end

  def create
    @property = Property.new(property_params)
    if @property.save
      default_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/1.jpg')
      default_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/2.jpg')
      default_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/3.jpg')
      default_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/4.jpg')
      default_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/5.jpeg')
      @property.photos.attach(io: default_photo1, filename: '1.jpg')
      @property.photos.attach(io: default_photo2, filename: '2.jpg')
      @property.photos.attach(io: default_photo3, filename: '3.jpg')
      @property.photos.attach(io: default_photo4, filename: '4.jpg')
      @property.photos.attach(io: default_photo5, filename: '5.jpeg')
      render :show
    else
      render json: ["Please fill out all fields"], status: 422
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
       :cable_tv, :washer, :kitchen, :breakfast, :body, :bounds)
  end

end
