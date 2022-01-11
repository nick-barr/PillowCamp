json.partial! @spot, partial: 'api/spots/spot', as: :spot
json.photoUrl url_for(@spot.photo)
