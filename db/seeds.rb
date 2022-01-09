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
    title: 'test', 
    description: 'test', 
    details: 'test', 
    latitude: 40.7128, 
    longitude: 74.0060, 
    lodging: ['test', 'test2', 'test3'], 
    essentials: ['test', 'test2', 'test3'], 
    amenities: ['test', 'test2', 'test3']
)