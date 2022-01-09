class Spot < ApplicationRecord
    validates :title, :description, :details, :latitude, :longitude, :lodging, :essentials, :amenities, presence: true

    has_one_attached :photo

end
