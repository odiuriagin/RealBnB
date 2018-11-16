@properties.each do |property|
  json.set! property.id do
    json.partial! '/api/properties/property', property: property
    json.owner property.host
  end
end
