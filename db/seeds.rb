# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all
# Review.destroy_all

User.create!(username: 'Happy Camper', password: 'password1') 
User.create!(username: 'Outdoor Explorer', password: 'password1') 
User.create!(username: 'Mountain Climber', password: 'password1') 
User.create!(username: 'Animal Lover', password: 'password1') 
User.create!(username: 'Bird Watcher', password: 'password1') 
User.create!(username: 'test_user1', password: 'password1') 

# Review.create!(
#     user_id: 1,
#     spot_id: 1,
#     body: "Such a wonderful experience! We could not recommend this little gem more! The location was perfect!",
# )
# Review.create!(
#     user_id: 1,
#     spot_id: 2,
#     body: "One of the best getaways I’ve ever had. The area is gorgeous, the hosts are Friendly kind and helpful. The little house is adorable and sits in a beautiful space."
# )
# Review.create!(
#     user_id: 1,
#     spot_id: 3,
#     body: "A beautiful mountain wonderland adventure. Great hiking trails for exploring, and farm animal friends to visit with. All the fun of feeling like you’re camping in the deep woods but with modern conveniences."
# )
# Review.create!(
#     user_id: 2,
#     spot_id: 4,
#     body: "Could not recommend this place more. Amazing views while sleeping under a starry sky nestled in a warm bed with a beautiful fire going is an experience of a lifetime."
# )
# Review.create!(
#     user_id: 2,
#     spot_id: 5,
#     body: "The view from the campsite is unbelievable! You must watch the sunset over the hill."
# )
# Review.create!(
#     user_id: 2,
#     spot_id: 1,
#     body: "Beautiful spot with amazing views! Super private. Loved and will definitely be back again."
# )
# Review.create!(
#     user_id: 3,
#     spot_id: 2,
#     body: "Amazing view, very clean campsite. Plenty of space for the tent, a nice fire pit for the evening and a good picnic table for the meals! We loved it!"
# )
# Review.create!(
#     user_id: 3,
#     spot_id: 3,
#     body: "This spot is so beautiful! There are apples falling off of old trees and a view of the valley that is just breath taking. Word to the wise though. It is SUNNY!!! Bring sunblock."
# )
# Review.create!(
#     user_id: 3,
#     spot_id: 4,
#     body: "This camp site is a little slice of heaven. We loved seeing the cows roaming and just relaxing, taking in the scenery. Our dog loved it too."
# )
# Review.create!(
#     user_id: 4,
#     spot_id: 5,
#     body: "A simply beautiful cabin, well designed and immaculately maintained. Burt has thought of and put into place everything needed to make your experience top end. Ample roominess and very comfortable. "
# )
# Review.create!(
#     user_id: 4,
#     spot_id: 1,
#     body: "A beautiful view, and a very private campsite. Directions were easy to follow. Highly recommend!"
# )
# Review.create!(
#     user_id: 5,
#     spot_id: 2,
#     body: "Hiking trails are a less than 10 minute drive away, and the host provides an enormous amount of information about the area including takeout menus, historical news clippings, hiking trail descriptions, and that's barely scratching the surface."
# )
# Review.create!(
#     user_id: 5,
#     spot_id: 3,
#     body: "Beautiful home in a small neighborhood close to the state park. Great spot to for day hikes on the Appalachian Trail. Lots of firewood. Very clean!"
# )
# Review.create!(
#     user_id: 5,
#     spot_id: 4,
#     body: "Perfect spot, just what we are always looking for, quiet, private and simple. Can’t wait to come back in the summer to swim in the river. Thanks!"
# )
# Review.create!(
#     user_id: 5,
#     spot_id: 5,
#     body: "Quaint and peaceful cabin. A home away from home. A short distance away from a state park."
# )

Spot.create!(
    title: 'Modern Geo-Dome', 
    description: 'Come escape to one of our Wildernest Geo-Domes. The Wildernest is high above a beautiful ravine. Nestled in native blueberry bushes and surrounded by pine trees, this Geo-Dome has views down the Palmaghatt Ravine to the Palmaghatt Kill Stream from its wide windows and beautiful deck.', 
    details: {'state' => 'New York'},
    latitude: 41.475, 
    longitude: -73.858,
    price: 120,
    lodging: ['Canvas tent', 'Up to 2 guests per site', 'Short walk'],
    essentials: ['Campfires allowed', 'Toilet available', 'Pets allowed'], 
    amenities: ['Potable water available', 'Kitchen available', 'Showers available']
)
Spot.create!(
    title: 'Franconia Forest', 
    description: 'Our site is just up the road from some of the most famous hikes, overlooks, swimming holes, formations, and ski resorts in the western White Mountains and has among the most scenic drives in America.',
    details: {'state' => 'New York'}, 
    latitude: 42.193, 
    longitude: -74.069,
    price: 80, 
    lodging: ['Campground', 'Up to 6 guests per site', 'Parking at listing'], 
    essentials: ['Campfires allowed', 'Pets allowed', 'Toilet available'], 
    amenities: ['Bins available', 'Picnic table available', 'Potable water available']
)
Spot.create!(
    title: 'Cozy Farm Yurt', 
    description: 'The Outlier Inn is a bucolic 12-acre farm in New York state’s southern Catskill mountains, 90 miles from NYC. The Inn offers a peaceful and inspiring respite from life in the Big City. We have sheep, goats, alpacas, and chickens which are accessible to guests!',
    details: {'state' => 'New York'}, 
    latitude: 43.240, 
    longitude: -74.541,
    price: 185, 
    lodging: ['Canvas tent', 'Up to 2 guests per site', 'Short walk'], 
    essentials: ['Campfires allowed', 'Pets allowed', 'Toilet available'], 
    amenities: ['Potable water available', 'Toilet available', 'Wifi available']
)
Spot.create!(
    title: 'Breathtaking Sunset View Hilltop', 
    description: 'Breathtaking getaway on a Small beautiful eco friendly family farm. Beautiful views of horses and wild life. Camp located on a huge green grass field. Central located in the Hudson valley. Minutes from biking and hikingt rails located along the Hudson River.',
    details: {'state' => 'New York'}, 
    latitude: 42.729, 
    longitude: -74.381, 
    price: 115,
    lodging: ['Campground', 'Up to 6 guests per site', 'Parking at listing'], 
    essentials: ['Campfires allowed', 'Pets allowed', 'Toilet available'], 
    amenities: ['Picnic table available', 'Bins available', 'Showers available']
)
Spot.create!(
    title: 'Tiny Mountain Glamphouse', 
    description: 'A unique cozy loft nested cozily in the woods next to a creek. This spot is equipped with a nice stone fire ring to really enjoy the outdoors. Also nearby are  logging roads that allow you to hike the Ripshin Mountains.',
    details: {'state' => 'New York'}, 
    latitude: 42.114, 
    longitude: -74.135,
    price: 85, 
    lodging: ['Cabin', 'Up to 9 guests per site', 'Park at listing'], 
    essentials: ['Campfires allowed', 'Toilet available', 'Pets allowed'], 
    amenities: ['Potable water available', 'Wifi available', 'Showers available']
)

spot1 = Spot.find(1)
spot1.photo.attach(io: File.open('app/assets/images/spots/geohouse1.jpg'), filename: 'geohouse1.jpg')
spot2 = Spot.find(2)
spot2.photo.attach(io: File.open('app/assets/images/spots/geohouse2.jpg'), filename: 'geohouse2.jpg')
spot3 = Spot.find(3)
spot3.photo.attach(io: File.open('app/assets/images/spots/yurt3.jpg'), filename: 'yurt3.jpg')
spot4 = Spot.find(4)
spot4.photo.attach(io: File.open('app/assets/images/spots/geohouse4.jpg'), filename: 'geohouse4.jpg')
spot5 = Spot.find(5)
spot5.photo.attach(io: File.open('app/assets/images/spots/cutecabin5.jpg'), filename: 'cutecabin5.jpg')