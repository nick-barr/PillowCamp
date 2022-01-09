# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'test_user1', password: 'password1') 
User.create!(username: 'test_user2', password: 'password2') 
User.create!(username: 'test_user3', password: 'password3') 

Spot.create!(
    title: 'Modern Geo-Dome', 
    description: 'Come escape to one of our Wildernest Geo-Domes. The Wildernest is high above a beautiful ravine. Nestled in native blueberry bushes and surrounded by pine trees, this Geo-Dome has views down the Palmaghatt Ravine to the Palmaghatt Kill Stream from its wide windows and beautiful deck.', 
    details: {'state' => 'New York'},
    latitude: 41.475, 
    longitude: -73.858,
    price: 120,
    lodging: ['test', 'test2', 'test3'], 
    essentials: ['test', 'test2', 'test3'], 
    amenities: ['test', 'test2', 'test3']
)
Spot.create!(
    title: 'Franconia Forest', 
    description: 'Our site is just up the road from some of the most famous hikes, overlooks, swimming holes, formations, and ski resorts in the western White Mountains and has among the most scenic drives in America.',
    details: {'state' => 'New York'}, 
    latitude: 42.193, 
    longitude: -74.069,
    price: 80, 
    lodging: ['', '', ''], 
    essentials: ['', '', ''], 
    amenities: ['', '', '']
)
Spot.create!(
    title: 'Cozy Farm Yurt', 
    description: 'The Outlier Inn is a bucolic 12-acre farm in New York state’s southern Catskill mountains, 90 miles from NYC. The Inn offers a peaceful and inspiring respite from life in the Big City. We have sheep, goats, alpacas, and chickens which are accessible to guests!',
    details: {'state' => 'New York'}, 
    latitude: 43.240, 
    longitude: -74.541,
    price: 185, 
    lodging: ['', '', ''], 
    essentials: ['', '', ''], 
    amenities: ['', '', '']
)
Spot.create!(
    title: 'Breathtaking Sunset View Hilltop', 
    description: 'Breathtaking getaway on a Small beautiful eco friendly family farm. Beautiful views of horses and wild life. Camp located on a huge green grass field. Central located in the Hudson valley. Minutes from biking and hikingt rails located along the Hudson River.',
    details: {'state' => 'New York'}, 
    latitude: 42.729, 
    longitude: -74.381, 
    price: 115,
    lodging: ['', '', ''], 
    essentials: ['', '', ''], 
    amenities: ['', '', '']
)
Spot.create!(
    title: 'Tiny Mountain Glamphouse', 
    description: 'A unique cozy loft nested cozily in the woods next to a creek. This spot is equipped with a nice stone fire ring to really enjoy the outdoors. Also nearby are  logging roads that allow you to hike the Ripshin Mountains.',
    details: {'state' => 'New York'}, 
    latitude: 42.114, 
    longitude: -74.135,
    price: 85, 
    lodging: ['', '', ''], 
    essentials: ['', '', ''], 
    amenities: ['', '', '']
)