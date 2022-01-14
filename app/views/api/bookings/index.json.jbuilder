@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :user_id, :spot_id, :check_in,
        :check_out, :price
        json.photoUrls url_for(booking.spot.photo)
    end
end