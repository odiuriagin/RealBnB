
export const fetchBookings = () => (
  $.ajax({
    method: "GET",
    url: 'api/bookings',
  })
)

export const fetchBooking = (id) => (
  $.ajax({
    method: "GET",
    url: `api/bookings/${id}`,
  })
)

export const createBooking = (booking) => (
  $.ajax({
    method: "POST",
    url: `api/properties/${booking.property_id}/bookings`,
    data: { booking },
  })
)
