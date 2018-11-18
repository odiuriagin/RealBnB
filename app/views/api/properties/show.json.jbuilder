
json.partial! '/api/properties/property', property: @property
json.owner @property.host
json.bookedDates @property.book_dates
