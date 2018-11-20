json.partial! '/api/properties/property', property: @property
json.bookedDates @property.book_dates
json.photoUrls @property.photos.map { |photo| url_for(photo) }

json.owner do
   json.extract! @property.host, :id, :name
   json.userPhotoUrl url_for(@property.host.photo)
end

json.reviews do
  @property.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
      json.author review.user
      if review.user.photo.attached?
        json.authorPhotoUrl url_for(review.user.photo)
      end
    end
  end
end
