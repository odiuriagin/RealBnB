@bookings.each do |booking|
  json.set! booking.id do

    json.partial! 'api/bookings/booking', booking: booking

    json.property do
      json.partial! 'api/properties/property', property: booking.property.id
    end

    json.user do
      json.partial! 'api/users/user', user: booking.property.host
    end

  end
end
