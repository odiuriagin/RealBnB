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

  has_many_attached :photos

  def book_dates
    dates = []

    self.bookings.each do |booking|
      start_date = booking.check_in
      end_date = booking.check_out
      (start_date..end_date).each do |date|
        dates << date
      end

      return dates
    end
  end


end
