@properties.each do |property|
  json.set! property.id do
    json.partial! '/api/properties/property', property: property
    json.owner property.host
    json.photoUrls property.photos.map { |photo| url_for(photo) }
    json.averageRating property.average_rating
    json.numReviews property.num_reviews
  end
end
