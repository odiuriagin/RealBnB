@properties.each do |property|
  json.set! property.id do
    json.partial! '/api/properties/property', property: property
    json.owner property.host
    json.photoUrls property.photos.map { |photo| url_for(photo) }
  end
end
