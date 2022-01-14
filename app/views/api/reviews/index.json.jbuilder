@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :spot_id, :body
        json.extract! review.user, :username
    end
end