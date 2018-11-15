# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

property1 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10001,
  address: "112 W 38th str",
  description: "Two-bedroom apartment",
  host_id: 18,
  price: 150,
  longitude: 40.751555,
  latitude: -73.980391,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false
)
property2 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10002,
  address: "255 E 13th Str",
  description: "One-bedroom apartment",
  host_id: 2,
  price: 100,
  longitude: 40.755593,
  latitude: -73.981049,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false
)
property3 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "10 W 58th str",
  description: "Penthouse",
  host_id: 19,
  price: 250,
  longitude: 40.755756,
  latitude: -73.984311,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false
)
