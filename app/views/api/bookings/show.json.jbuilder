json.extract! @booking, :id, :user_id, :spot_id, :check_in, :check_out
json.photoUrls url_for(@booking.spot.photo)
