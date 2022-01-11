class Spot < ApplicationRecord
    validates :title, :description, :details, :latitude, :longitude, :lodging, :essentials, :amenities, presence: true

    has_one_attached :photo
    has_many :reviews, class_name: "Review", foreign_key: "spot_id"

end
