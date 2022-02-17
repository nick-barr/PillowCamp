class Review < ApplicationRecord
    validates :body, :user_id, :spot_id, presence: true

    belongs_to :user, class_name: "User", foreign_key: "user_id"
    belongs_to :spot, class_name: "Spot", foreign_key: "spot_id"

end