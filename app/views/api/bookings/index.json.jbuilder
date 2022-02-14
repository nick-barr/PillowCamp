@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :user_id, :spot_id, :check_in,
        :check_out, :capacity
        json.photoUrls url_for(booking.spot.photo)
        json.title booking.spot.title
        json.cost booking.spot.price
    end
end