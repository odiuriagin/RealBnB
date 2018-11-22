# == Schema Information
#
# Table name: properties
#
#  id          :bigint(8)        not null, primary key
#  city        :string           not null
#  state       :string           not null
#  zip         :integer          not null
#  address     :string           not null
#  description :text             not null
#  host_id     :integer          not null
#  price       :integer          not null
#  longitude   :float            not null
#  latitude    :float            not null
#  wifi        :boolean          default(FALSE), not null
#  cable_tv    :boolean          default(FALSE), not null
#  washer      :boolean          default(FALSE), not null
#  kitchen     :boolean          default(FALSE), not null
#  breakfast   :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  body        :text
#

class Property < ApplicationRecord

  validates :city, :state, :zip, :address, :description, :host_id,
            :price, :longitude, :latitude, presence: true
  validates :address, uniqueness: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: 'User'

  has_many :bookings,
    foreign_key: :property_id,
    class_name: 'Booking'

  has_many :reviews,
    foreign_key: :property_id,
    class_name: 'Review'

  has_many_attached :photos

  def book_dates
    result = []

    self.bookings.each do |booking|
      start = booking.check_in
      stop = booking.check_out

      while start < stop
        result << start
        start += 1
      end
    end

    result
  end

  def self.in_bounds(bounds)
    self.where("longitude < ?", bounds[:northEast][:latitude])
      .where("longitude > ?", bounds[:southWest][:latitude])
      .where("latitude > ?", bounds[:southWest][:longitude])
      .where("latitude < ?", bounds[:northEast][:longitude])
  end

  def average_rating
    result = 0
    if !self.reviews || self.reviews.length == 0
      return result
    end
    self.reviews.each do |review|
      if !review.value
        return result
      end
      result += review.value
    end
    return result.fdiv(self.reviews.length)
  end

  def num_reviews
    result = 0
    if !self.reviews || self.reviews.length == 0
      return result
    end
    self.reviews.each do |review|
      if !review.value
        return result
      end
      result += 1
    end
    return result
  end


end
