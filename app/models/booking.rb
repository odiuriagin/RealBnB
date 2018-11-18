# == Schema Information
#
# Table name: bookings
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  property_id :integer          not null
#  check_in    :date             not null
#  check_out   :date             not null
#  num_people  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Booking < ApplicationRecord
  validates :check_in, :check_out, :num_people, presence: true
  validate :conflict

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :property,
    foreign_key: :property_id,
    class_name: 'Property'


  def conflict
    start_date = self.check_in
    end_date = self.check_out
    (start_date..end_date).each do |date|
      if self.property.book_dates.include?(date)
        errors[:booking] << "These dates are not available"
      end
    end
  end

end
