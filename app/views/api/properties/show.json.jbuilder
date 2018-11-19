
json.partial! '/api/properties/property', property: @property
json.owner @property.host
json.bookedDates @property.book_dates
json.photoUrls @property.photos.map { |photo| url_for(photo) }
