json.partial! @spot, partial: 'api/spots/spot', as: :spot
# json.photoUrl url_for(@spot.photo)
json.set! 'reviews' do
    json.array! @spot.reviews do |review|
        json.user review.user.username
        json.body review.body
    end
end


# json.reviews @spot.reviews, :body