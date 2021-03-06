
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

export const createBooking = (booking) => {
  return (
    $.ajax({
      method: "POST",
      url: `api/properties/${booking.property_id}/bookings`,
      data: { booking },
    })
  );
}

export const deleteBooking = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/bookings/${id}`,
  })
)
