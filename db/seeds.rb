# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

module EzDownload
  require 'net/http'
end

User.destroy_all

user1 = User.create!(
  name: "John Smith",
  email: "john@gmail.com",
  password: "starwars"
)

user2 = User.create!(
  name: "Bob Brown",
  email: "bob@gmail.com",
  password: "starwars"
)

user3 = User.create!(
  name: "Kip Trudel",
  email: "kip@gmail.com",
  password: "starwars"
)

user4 = User.create!(
  name: "Fulvia Conner",
  email: "fulvia@gmail.com",
  password: "starwars"
)

user5 = User.create!(
  name: "Derek Scott",
  email: "derek@gmail.com",
  password: "starwars"
)

user6 = User.create!(
  name: "Loreen Branning",
  email: "loreen@gmail.com",
  password: "starwars"
)

user7 = User.create!(
  name: "Teodoro Jurek",
  email: "teodoro@gmail.com",
  password: "starwars"
)

user8 = User.create!(
  name: "Chaya Whitted",
  email: "chaya@gmail.com",
  password: "starwars"
)

user9 = User.create!(
  name: "Monserrate Liebsch",
  email: "monserrate@gmail.com",
  password: "starwars"
)

user10 = User.create!(
  name: "Rob Leonard",
  email: "rob@gmail.com",
  password: "starwars"
)

user11 = User.create!(
  name: "Ta Sturgell",
  email: "ta@gmail.com",
  password: "starwars"
)

user12 = User.create!(
  name: "Juana Elks",
  email: "juana@gmail.com",
  password: "starwars"
)

user13 = User.create!(
  name: "Stephan Mings",
  email: "stephan@gmail.com",
  password: "starwars"
)


user14 = User.create!(
  name: "Magali Gillespie",
  email: "magali@gmail.com",
  password: "starwars"
)

user15 = User.create!(
  name: "Jonathon Achorn",
  email: "jonathon@gmail.com",
  password: "starwars"
)

user16 = User.create!(
  name: "Demo User",
  email: "demo@gmail.com",
  password: "starwars"
)

user17 = User.create!(
  name: "Nenita Carreno",
  email: "nenita@gmail.com",
  password: "starwars"
)

user18 = User.create!(
  name: "Jesse Sarmiento",
  email: "jesse@gmail.com",
  password: "starwars"
)

user19 = User.create!(
  name: "Ethelene Vaught",
  email: "ethelene@gmail.com",
  password: "starwars"
)

user20 = User.create!(
  name: "Ashlea Matchett",
  email: "ashlea@gmail.com",
  password: "starwars"
)

Property.destroy_all

property1 = Property.create!(
  city: "Long Island City",
  state: "NY",
  zip: 11105,
  address: "23-20 23rd St",
  description: "Studio",
  host_id: user1.id,
  price: 85,
  longitude: 40.777634,
  latitude: -73.918725,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "You will have your own private space consisting of a large, interesting room + private bathroom/shower + your own private entrance + a private foyer area + a private garden/patio area. You will have privacy on your own separate level (the ground level/basement) of the house."
)
property2 = Property.create!(
  city: "Williamsburg",
  state: "NY",
  zip: 11211,
  address: "230 Grand St",
  description: "Studio Apt. in East Williamsburg",
  host_id: user2.id,
  price: 100,
  longitude: 40.713407,
  latitude: -73.959474,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "This is a beautiful garden studio apartment and its great for one person or for a couple. Located in a quiet street just 3 blocks away from the L train,10 min from downtown Manhattan, and a short walk away from the heart of Williamsburg and Bushwick - two of the coolest neighborhoods in Brooklyn, filled with amazing restaurants, bars, art galleries, and shopping."
)
property3 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10075,
  address: "201 E 80th St",
  description: "Cozy New York Studio",
  host_id: user3.id,
  price: 120,
  longitude: 40.774971,
  latitude: -73.955824,
  wifi: false,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "If you don't need a huge place, you will love this one! It's a studio with high ceilings and carpet floors. That's a first floor apartment, windows are facing East 80th St, but it's a very quiet street."
)

property4 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10028,
  address: "1441 3rd Ave",
  description: "Apartment near Museum Mile",
  host_id: user4.id,
  price: 150,
  longitude: 40.775759,
  latitude: -73.955835,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "This is a PRIVATE APARTMENT in the heart of Manhattan. Less than 15 min walk to the Metropolitan Museum of Art and Central Park. 5 minute walk to metro. Tons of trendy restaurants and bars nearby. NOT to be confused with places in Harlem, New Jersey or the other boroughs like Brooklyn and Queens. This is PRIME MANHATTAN location in the tony Upper East Side."
)
property5 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10017,
  address: "415 Madison Ave",
  description: "Best location in Midtown",
  host_id: user5.id,
  price: 170,
  longitude: 40.756746,
  latitude: -73.975837,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "WELCOME to this beautiful newly renovated apartment, which is located in the HEART of Manhattan in the townhouse type walk-up building. Midtown is both the geographic and symbolic center of New York City.With its busy sidewalks, great attractions, countless restaurants, chic bars and largest stores you get the best deal in Manhattan."
)

property6 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10011,
  address: "350 W 24th St",
  description: "Specious One Bedroom",
  host_id: user6.id,
  price: 140,
  longitude: 40.747012,
  latitude: -74.001243,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Around 900 sf absolutely amazing TWO bedroom Located in the heart of Chelsea, Next to Flatiron building, walk distance to best shops and restaurants, like 230 Fifh, Nobu, Flatiron room, Next to Eataly"
)
property7 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 11101,
  address: "330 W 30th St",
  description: "Luxury Apartment near MSG ",
  host_id: user7.id,
  price: 280,
  longitude: 40.750302,
  latitude: -73.996830,
  wifi: false,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Fantastic apartment and amenities in a brand new building. Located in the heart of Midtown, this location is an ideal match for a perfect NYC vacation. Within walking distance of Madison Square Garden, Empire State Building, K-Town, 5th Avenue shops, Bryant Park and the Hudson River."
)
property8 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10003,
  address: "301 E 9th St",
  description: "Gorgeous Apt by Union Square",
  host_id: user8.id,
  price: 120,
  longitude: 40.728645,
  latitude: -73.986332,
  wifi: true,
  cable_tv: false,
  washer: false,
  kitchen: true,
  breakfast: true,
  body: "Spacious and modern apartment in the heart of downtown in the Lower East Side. Walking distance to the best bars in the city, amazing food and great shopping. Centrally located, you’re walking distances to trendy cafes in Nolita, shopping in Soho, classic institutions in the East Village, dim sum in Chinatown, Little Italy, or even walk the Williamsburg Bridge to Brooklyn. Welcome to New York City"
)

property9 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10011,
  address: "147 W 15th St",
  description: "Luxury Home. Prime Location",
  host_id: user9.id,
  price: 199,
  longitude: 40.739083,
  latitude: -73.998001,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Gorgeous luxury living in the heart of Manhattan! Spacious living with luxury finishes throughout. Heart of it all. Enjoy our brand new furnishings and make yourself feel like home!"
)
property10 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10036,
  address: "208 W 41th St",
  description: "Time Square Luxury Apt",
  host_id: user10.id,
  price: 350,
  longitude: 40.755591,
  latitude: -73.988141,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "High Rise modern luxury building has everything you can imagine! Want to be neighbor of celebrities? book now! Special price offered for first 3 bookings!"
)

property11 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33139,
  address: "1301 Collins Ave",
  description: "Spectacular residence in SB",
  host_id: user11.id,
  price: 115,
  longitude: 25.784524,
  latitude: -80.131248,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Modern apartment in boutique condominium with pool and parking spot. High end finishings, two TV, wi-fi and central AC: sophisticated designed 822 sqft one bedroom, two bathrooms apartment over looking the pool, in the chic condo building, just few minutes from everything in South Beach! "
)
property12 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33139,
  address: "990 Meridian Ave",
  description: "Beautiful SB Apartment",
  host_id: user12.id,
  price: 130,
  longitude: 25.779522,
  latitude: -80.136151,
  wifi: true,
  cable_tv: false,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Great one bedroom apartment for a maximum of 4 guests in unbeatable location in South Beach with free parking spot. Apartment is walking distance to Lincoln Road, beach, Española Way, New World Symphony, Miami Beach Convention Center, Fillmore Theatre, among others. "
)
property13 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33139,
  address: "635 Collins Ave",
  description: "One Bedroom Apartment Suite ",
  host_id: user13.id,
  price: 165,
  longitude: 25.776174,
  latitude: -80.132089,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: false,
  body: "Tradewinds One Bedroom Apartment Suites has all the comforts of a home. Enjoy spacious living and dining areas with ceramic tile flooring. Fully equipped kitchen, a separate master bedroom features ultra-comfortable queen size bed with a mountain of pillows. The full granite-clad bathroom offers luxury bath products. Accommodation comes with complimentary WiFi, plasma TV with satellite service, all utilities, linens, housewares, and daily housekeeping service."
)

property14 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33139,
  address: "1000 Euclid Ave",
  description: "Two bedroom Apartment",
  host_id: user14.id,
  price: 95,
  longitude: 25.781372,
  latitude: -80.135136,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Modern apartment in boutique condominium with pool and parking spot. High end finishings, two TV, wi-fi and central AC: sophisticated designed 822 sqft one bedroom, two bathrooms apartment over looking the pool, in the chic condo building, just few minutes from everything in South Beach! "
)
property15 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33139,
  address: "1500 Pennsylvania Ave",
  description: "South Beach Private House",
  host_id: user15.id,
  price: 150,
  longitude: 25.788344,
  latitude: -80.134216,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "THERE IS ONLY ONE, in all of South Beach. And you've found it! Private Guesthouse. Completely separate from the main house. You will have use of the expansive heated pool and MASSIVE/ENORMOUS tropical garden. Your own private full bathroom, bedroom and kitchen."
)

property16 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33139,
  address: "1100 15th St",
  description: "Modern Loft in South Beach",
  host_id: user16.id,
  price: 105,
  longitude: 25.787293,
  latitude: -80.139916,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Modern apartment in boutique condominium with pool and parking spot. High end finishings, two TV, wi-fi and central AC: sophisticated designed 822 sqft one bedroom, two bathrooms apartment over looking the pool, in the chic condo building, just few minutes from everything in South Beach! "
)
property17 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33128,
  address: "40 NW 3rd St",
  description: "Great Apartment near Downtown",
  host_id: user17.id,
  price: 100,
  longitude: 25.777054,
  latitude: -80.194525,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Modern apartment in boutique condominium with pool and parking spot. High end finishings, two TV, wi-fi and central AC: sophisticated designed 822 sqft one bedroom, two bathrooms apartment over looking the pool, in the chic condo building, just few minutes from everything in South Beach! "
)
property18 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33128,
  address: "300 NW 2nd Ave",
  description: "Magnificient Condo in Miami!",
  host_id: user18.id,
  price: 110,
  longitude: 25.777049,
  latitude: -80.197846,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Modern apartment in boutique condominium with pool and parking spot. High end finishings, two TV, wi-fi and central AC: sophisticated designed 822 sqft one bedroom, two bathrooms apartment over looking the pool, in the chic condo building, just few minutes from everything in South Beach! "
)

property19 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33136,
  address: "1232 NW 1st Pl",
  description: "Colorful apartment near Downtown",
  host_id: user19.id,
  price: 115,
  longitude: 25.786826,
  latitude: -80.198009,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Modern apartment in boutique condominium with pool and parking spot. High end finishings, two TV, wi-fi and central AC: sophisticated designed 822 sqft one bedroom, two bathrooms apartment over looking the pool, in the chic condo building, just few minutes from everything in South Beach! "
)
property20 = Property.create!(
  city: "Miami",
  state: "FL",
  zip: 33132,
  address: "1699 NE 2nd Ave",
  description: "Spectacular residence in Miami",
  host_id: user12.id,
  price: 115,
  longitude: 25.791145,
  latitude: -80.190619,
  wifi: true,
  cable_tv: true,
  washer: true,
  kitchen: true,
  breakfast: true,
  body: "Modern apartment in boutique condominium with pool and parking spot. High end finishings, two TV, wi-fi and central AC: sophisticated designed 822 sqft one bedroom, two bathrooms apartment over looking the pool, in the chic condo building, just few minutes from everything in South Beach! "
)

property1_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_1/1.jpeg')
property1_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_1/1.jpg')
property1_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_1/1.jpg')
property1_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_1/1.jpg')
property1_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_1/1.jpeg')

property2_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_2/1.jpg')
property2_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_2/2.jpg')
property2_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_2/3.jpeg')
property2_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_2/4.jpeg')
property2_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_2/5.jpg')

property3_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_3/1.jpg')
property3_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_3/2.jpg')
property3_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_3/3.jpg')
property3_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_3/4.jpg')
property3_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_3/5.jpeg')

property4_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_4/1.jpg')
property4_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_4/2.jpg')
property4_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_4/3.jpg')
property4_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_4/4.jpg')
property4_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_4/5.jpg')

property5_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_5/1.jpg')
property5_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_5/2.jpg')
property5_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_5/3.jpeg')
property5_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_5/4.jpeg')
property5_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_5/5.jpg')

property6_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_6/1.jpg')
property6_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_6/2.jpg')
property6_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_6/3.jpg')
property6_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_6/4.jpg')
property6_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_6/5.jpg')

property7_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_7/1.jpg')
property7_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_7/2.jpg')
property7_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_7/3.jpg')
property7_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_7/4.jpg')
property7_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_7/5.jpg')

property8_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_8/1.jpeg')
property8_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_8/2.jpg')
property8_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_8/3.jpeg')
property8_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_8/4.jpeg')
property8_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_8/5.jpeg')

property9_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_9/1.jpeg')
property9_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_9/2.jpeg')
property9_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_9/3.jpeg')
property9_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_9/4.jpeg')
property9_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_9/5.jpeg')

property10_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_10/1.jpeg')
property10_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_10/2.jpg')
property10_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_10/3.jpeg')
property10_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_10/4.jpg')
property10_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_10/5.jpg')

property11_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_11/1.jpg')
property11_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_11/2.jpg')
property11_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_11/3.jpg')
property11_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_11/4.jpeg')
property11_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_11/5.jpeg')

property12_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_12/1.jpg')
property12_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_12/2.jpeg')
property12_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_12/3.jpg')
property12_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_12/4.jpg')
property12_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_12/5.jpg')

property13_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_13/1.jpeg')
property13_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_13/2.jpeg')
property13_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_13/3.jpeg')
property13_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_13/4.jpeg')
property13_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_13/5.jpeg')

property14_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties14/1.jpg')
property14_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties14/2.jpeg')
property14_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties14/3.jpeg')
property14_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties14/4.jpeg')
property14_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties14/5.jpeg')

property15_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_15/1.jpeg')
property15_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_15/2.jpeg')
property15_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_15/3.jpeg')
property15_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_15/4.jpeg')
property15_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_15/5.jpeg')

property16_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_16/1.jpg')
property16_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_16/2.jpg')
property16_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_16/3.jpeg')
property16_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_16/4.jpeg')
property16_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_16/5.jpg')

property17_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/1.jpg')
property17_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/2.jpg')
property17_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/3.jpg')
property17_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/4.jpg')
property17_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_17/5.jpeg')

property18_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_18/1.jpeg')
property18_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_18/2.jpg')
property18_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_18/3.jpeg')
property18_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_18/4.jpg')
property18_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_18/5.jpg')

property19_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_19/1.jpg')
property19_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_19/2.jpg')
property19_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_19/3.jpeg')
property19_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_19/4.jpeg')
property19_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_19/5.jpeg')

property20_photo1 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_20/1.jpg')
property20_photo2 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_20/2.jpg')
property20_photo3 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_20/3.jpg')
property20_photo4 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_20/4.jpg')
property20_photo5 = EzDownload.open('https://s3.amazonaws.com/realbnb-prod/property_photos/properties_20/5.jpg')

property1.photos.attach(io: property1_photo1, filename: '1.jpeg')
property1.photos.attach(io: property1_photo2, filename: '2.jpg')
property1.photos.attach(io: property1_photo3, filename: '3.jpg')
property1.photos.attach(io: property1_photo4, filename: '4.jpg')
property1.photos.attach(io: property1_photo5, filename: '5.jpeg')

property2.photos.attach(io: property2_photo1, filename: '1.jpg')
property2.photos.attach(io: property2_photo2, filename: '2.jpg')
property2.photos.attach(io: property2_photo3, filename: '3.jpeg')
property2.photos.attach(io: property2_photo4, filename: '4.jpeg')
property2.photos.attach(io: property2_photo5, filename: '5.jpg')

property3.photos.attach(io: property3_photo1, filename: '1.jpg')
property3.photos.attach(io: property3_photo2, filename: '2.jpg')
property3.photos.attach(io: property3_photo3, filename: '3.jpg')
property3.photos.attach(io: property3_photo4, filename: '4.jpg')
property3.photos.attach(io: property3_photo5, filename: '5.jpeg')

property4.photos.attach(io: property4_photo1, filename: '1.jpg')
property4.photos.attach(io: property4_photo2, filename: '2.jpg')
property4.photos.attach(io: property4_photo3, filename: '3.jpg')
property4.photos.attach(io: property4_photo4, filename: '4.jpg')
property4.photos.attach(io: property4_photo5, filename: '5.jpg')

property5.photos.attach(io: property5_photo1, filename: '1.jpg')
property5.photos.attach(io: property5_photo2, filename: '2.jpg')
property5.photos.attach(io: property5_photo3, filename: '3.jpeg')
property5.photos.attach(io: property5_photo4, filename: '4.jpeg')
property5.photos.attach(io: property5_photo5, filename: '5.jpg')

property6.photos.attach(io: property6_photo1, filename: '1.jpg')
property6.photos.attach(io: property6_photo2, filename: '2.jpg')
property6.photos.attach(io: property6_photo3, filename: '3.jpg')
property6.photos.attach(io: property6_photo4, filename: '4.jpg')
property6.photos.attach(io: property6_photo5, filename: '5.jpg')

property7.photos.attach(io: property7_photo1, filename: '1.jpg')
property7.photos.attach(io: property7_photo2, filename: '2.jpg')
property7.photos.attach(io: property7_photo3, filename: '3.jpg')
property7.photos.attach(io: property7_photo4, filename: '4.jpg')
property7.photos.attach(io: property7_photo5, filename: '5.jpg')

property8.photos.attach(io: property8_photo1, filename: '1.jpeg')
property8.photos.attach(io: property8_photo2, filename: '2.jpg')
property8.photos.attach(io: property8_photo3, filename: '3.jpeg')
property8.photos.attach(io: property8_photo4, filename: '4.jpeg')
property8.photos.attach(io: property8_photo5, filename: '5.jpeg')

property9.photos.attach(io: property9_photo1, filename: '1.jpeg')
property9.photos.attach(io: property9_photo2, filename: '2.jpeg')
property9.photos.attach(io: property9_photo3, filename: '3.jpeg')
property9.photos.attach(io: property9_photo4, filename: '4.jpeg')
property9.photos.attach(io: property9_photo5, filename: '5.jpeg')

property10.photos.attach(io: property10_photo1, filename: '1.jpeg')
property10.photos.attach(io: property10_photo2, filename: '2.jpg')
property10.photos.attach(io: property10_photo3, filename: '3.jpeg')
property10.photos.attach(io: property10_photo4, filename: '4.jpg')
property10.photos.attach(io: property10_photo5, filename: '5.jpg')

property11.photos.attach(io: property11_photo1, filename: '1.jpg')
property11.photos.attach(io: property11_photo2, filename: '2.jpg')
property11.photos.attach(io: property11_photo3, filename: '3.jpg')
property11.photos.attach(io: property11_photo4, filename: '4.jpeg')
property11.photos.attach(io: property11_photo5, filename: '5.jpeg')

property12.photos.attach(io: property12_photo1, filename: '1.jpg')
property12.photos.attach(io: property12_photo2, filename: '2.jpeg')
property12.photos.attach(io: property12_photo3, filename: '3.jpg')
property12.photos.attach(io: property12_photo4, filename: '4.jpg')
property12.photos.attach(io: property12_photo5, filename: '5.jpg')

property13.photos.attach(io: property13_photo1, filename: '1.jpeg')
property13.photos.attach(io: property13_photo2, filename: '2.jpeg')
property13.photos.attach(io: property13_photo3, filename: '3.jpeg')
property13.photos.attach(io: property13_photo4, filename: '4.jpeg')
property13.photos.attach(io: property13_photo5, filename: '5.jpeg')

property14.photos.attach(io: property14_photo1, filename: '1.jpg')
property14.photos.attach(io: property14_photo2, filename: '2.jpeg')
property14.photos.attach(io: property14_photo3, filename: '3.jpeg')
property14.photos.attach(io: property14_photo4, filename: '4.jpeg')
property14.photos.attach(io: property14_photo5, filename: '5.jpeg')

property15.photos.attach(io: property15_photo1, filename: '1.jpeg')
property15.photos.attach(io: property15_photo2, filename: '2.jpeg')
property15.photos.attach(io: property15_photo3, filename: '3.jpeg')
property15.photos.attach(io: property15_photo4, filename: '4.jpeg')
property15.photos.attach(io: property15_photo5, filename: '5.jpeg')

property16.photos.attach(io: property16_photo1, filename: '1.jpg')
property16.photos.attach(io: property16_photo2, filename: '2.jpg')
property16.photos.attach(io: property16_photo3, filename: '3.jpeg')
property16.photos.attach(io: property16_photo4, filename: '4.jpeg')
property16.photos.attach(io: property16_photo5, filename: '5.jpg')

property17.photos.attach(io: property17_photo1, filename: '1.jpg')
property17.photos.attach(io: property17_photo2, filename: '2.jpg')
property17.photos.attach(io: property17_photo3, filename: '3.jpg')
property17.photos.attach(io: property17_photo4, filename: '4.jpg')
property17.photos.attach(io: property17_photo5, filename: '5.jpeg')

property18.photos.attach(io: property18_photo1, filename: '1.jpeg')
property18.photos.attach(io: property18_photo2, filename: '2.jpg')
property18.photos.attach(io: property18_photo3, filename: '3.jpeg')
property18.photos.attach(io: property18_photo4, filename: '4.jpg')
property18.photos.attach(io: property18_photo5, filename: '5.jpg')

property19.photos.attach(io: property19_photo1, filename: '1.jpg')
property19.photos.attach(io: property19_photo2, filename: '2.jpg')
property19.photos.attach(io: property19_photo3, filename: '3.jpeg')
property19.photos.attach(io: property19_photo4, filename: '4.jpeg')
property19.photos.attach(io: property19_photo5, filename: '5.jpeg')

property20.photos.attach(io: property20_photo1, filename: '1.jpg')
property20.photos.attach(io: property20_photo2, filename: '2.jpg')
property20.photos.attach(io: property20_photo3, filename: '3.jpg')
property20.photos.attach(io: property20_photo4, filename: '4.jpg')
property20.photos.attach(io: property20_photo5, filename: '5.jpg')
