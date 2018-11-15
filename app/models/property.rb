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
#

class Property < ApplicationRecord

  validates :city, :state, :zip, :address, :description, :host_id,
            :price, :longitude, :latitude, presence: true
  validates :address, uniqueness: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: 'User'

  has_one_attached :photo


end
