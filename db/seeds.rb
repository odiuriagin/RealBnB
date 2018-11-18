# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
  description: "BEST LOCATION in MIDTOWN",
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
  city: "Long Island City",
  state: "NY",
  zip: 11105,
  address: "23-21 23rd St",
  description: "Studio",
  host_id: user6.id,
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
property7 = Property.create!(
  city: "Williamsburg",
  state: "NY",
  zip: 11211,
  address: "231 Grand St",
  description: "Studio Apt. in East Williamsburg",
  host_id: user7.id,
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
property8 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10075,
  address: "202 E 80th St",
  description: "Cozy New York Studio",
  host_id: user8.id,
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

property9 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10028,
  address: "1442 3rd Ave",
  description: "Apartment near Museum Mile",
  host_id: user9.id,
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
property10 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10017,
  address: "416 Madison Ave",
  description: "BEST LOCATION in MIDTOWN",
  host_id: user10.id,
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

property11 = Property.create!(
  city: "Long Island City",
  state: "NY",
  zip: 11105,
  address: "23-22 23rd St",
  description: "Studio",
  host_id: user11.id,
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
property12 = Property.create!(
  city: "Williamsburg",
  state: "NY",
  zip: 11211,
  address: "232 Grand St",
  description: "Studio Apt. in East Williamsburg",
  host_id: user12.id,
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
property13 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10075,
  address: "203 E 80th St",
  description: "Cozy New York Studio",
  host_id: user13.id,
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

property14 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10028,
  address: "1443 3rd Ave",
  description: "Apartment near Museum Mile",
  host_id: user14.id,
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
property15 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10017,
  address: "417 Madison Ave",
  description: "BEST LOCATION in MIDTOWN",
  host_id: user15.id,
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

property16 = Property.create!(
  city: "Long Island City",
  state: "NY",
  zip: 11105,
  address: "23-23 23rd St",
  description: "Studio",
  host_id: user16.id,
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
property17 = Property.create!(
  city: "Williamsburg",
  state: "NY",
  zip: 11211,
  address: "233 Grand St",
  description: "Studio Apt. in East Williamsburg",
  host_id: user17.id,
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
property18 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10075,
  address: "204 E 80th St",
  description: "Cozy New York Studio",
  host_id: user18.id,
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

property19 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10028,
  address: "1445 3rd Ave",
  description: "Apartment near Museum Mile",
  host_id: user19.id,
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
property20 = Property.create!(
  city: "New York",
  state: "NY",
  zip: 10017,
  address: "419 Madison Ave",
  description: "BEST LOCATION in MIDTOWN",
  host_id: user20.id,
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
