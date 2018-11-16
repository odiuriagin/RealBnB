# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(
  name: "John",
  email: "john@gmail.com",
  password: "starwars"
)

user2 = User.create!(
  name: "Bob",
  email: "bob@gmail.com",
  password: "starwars"
)

user3 = User.create!(
  name: "Bill",
  email: "bill@gmail.com",
  password: "starwars"
)

user4 = User.create!(
  name: "Demo User",
  email: "demo@gmail.com",
  password: "starwars"
)

Property.destroy_all

property4 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10001,
  address: "260 W 38th str",
  description: "Two-bedroom apartment",
  host_id: user1.id,
  price: 150,
  longitude: 40.751555,
  latitude: -73.980391,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property5 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10002,
  address: "261 E 13th Str",
  description: "One-bedroom apartment",
  host_id: user2.id,
  price: 100,
  longitude: 40.755593,
  latitude: -73.981049,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property6 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "262 W 58th str",
  description: "Penthouse",
  host_id: user3.id,
  price: 250,
  longitude: 40.755756,
  latitude: -73.984311,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)

property7 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10001,
  address: "263 W 38th str",
  description: "Two-bedroom apartment",
  host_id: user1.id,
  price: 150,
  longitude: 40.751555,
  latitude: -73.980391,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property8 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10002,
  address: "264 E 13th Str",
  description: "One-bedroom apartment",
  host_id: user2.id,
  price: 100,
  longitude: 40.755593,
  latitude: -73.981049,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property9 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "265 W 58th str",
  description: "Penthouse",
  host_id: user3.id,
  price: 250,
  longitude: 40.755756,
  latitude: -73.984311,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)

property10 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10001,
  address: "266 W 38th str",
  description: "Two-bedroom apartment",
  host_id: user1.id,
  price: 150,
  longitude: 40.751555,
  latitude: -73.980391,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property11 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10002,
  address: "267 E 13th Str",
  description: "One-bedroom apartment",
  host_id: user2.id,
  price: 100,
  longitude: 40.755593,
  latitude: -73.981049,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property12 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "268 W 58th str",
  description: "Penthouse",
  host_id: user3.id,
  price: 250,
  longitude: 40.755756,
  latitude: -73.984311,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)

property13 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10001,
  address: "269 W 38th str",
  description: "Two-bedroom apartment",
  host_id: user1.id,
  price: 150,
  longitude: 40.751555,
  latitude: -73.980391,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property14 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10002,
  address: "270 E 13th Str",
  description: "One-bedroom apartment",
  host_id: user2.id,
  price: 100,
  longitude: 40.755593,
  latitude: -73.981049,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property15 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "271 W 58th str",
  description: "Penthouse",
  host_id: user3.id,
  price: 250,
  longitude: 40.755756,
  latitude: -73.984311,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)

property16 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10001,
  address: "272 W 38th str",
  description: "Two-bedroom apartment",
  host_id: user1.id,
  price: 150,
  longitude: 40.751555,
  latitude: -73.980391,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property17 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10002,
  address: "273 E 13th Str",
  description: "One-bedroom apartment",
  host_id: user2.id,
  price: 100,
  longitude: 40.755593,
  latitude: -73.981049,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property18 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "274 W 58th str",
  description: "Penthouse",
  host_id: user3.id,
  price: 250,
  longitude: 40.755756,
  latitude: -73.984311,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)

property19 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10001,
  address: "275 W 38th str",
  description: "Two-bedroom apartment",
  host_id: user1.id,
  price: 150,
  longitude: 40.751555,
  latitude: -73.980391,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property20 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10002,
  address: "276 E 13th Str",
  description: "One-bedroom apartment",
  host_id: user2.id,
  price: 100,
  longitude: 40.755593,
  latitude: -73.981049,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
property21 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "277 W 58th str",
  description: "Penthouse",
  host_id: user3.id,
  price: 250,
  longitude: 40.755756,
  latitude: -73.984311,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
)
