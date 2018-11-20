# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  property_id   :integer          not null
#  user_id       :integer          not null
#  body          :text
#  accuracy      :integer
#  location      :integer
#  communication :integer
#  check_in      :integer
#  cleanliness   :integer
#  value         :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord

  belongs_to :property,
    foreign_key: :property_id,
    class_name: 'Property'

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

end
