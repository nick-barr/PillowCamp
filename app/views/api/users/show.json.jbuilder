json.partial! "api/users/user", user: @user

# json.partial! @spot, partial: 'api/spots/spot', as: :spot
# # json.photoUrl url_for(@spot.photo)
# json.set! 'reviews' do
#     json.array! @spot.reviews do |review|
#         json.user review.user.username
#         json.body review.body
#     end
# end

# json.partial! @spot, partial: 'api/spots/spot', as: :spot
# # json.photoUrl url_for(@spot.photo)
# json.set! 'reviews' do
#     json.array! @spot.reviews do |review|
#         json.user review.user.username
#         json.body review.body
#     end
# end
# json.partial! @user, partial: "api/users/user", as: :user
json.set! 'bookings' do
    json.array! @user.bookings do |booking|
        json.spot booking.spot.title
        json.description booking.spot.description
        json.booking booking.check_in
        json.booking booking.check_out
    end
end