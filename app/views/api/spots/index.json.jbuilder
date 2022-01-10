@spots.each do |spot|
    json.set! spot.id do
        json.partial! spot, partial: 'api/spots/spot', as: :spot
        # json.photoUrl url_for(spot.photo)
    end
end