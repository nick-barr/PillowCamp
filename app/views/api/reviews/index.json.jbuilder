@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :spot_id, :body
        json.extract! review.user, :username
        json.photoUrls url_for(review.spot.photo)
        json.title review.spot.title
    end
end