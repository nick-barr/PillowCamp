class Booking < ApplicationRecord
    # status = %w(PENDING APPROVED DENIED)
    validates :check_in, :check_out, :spot_id, :user_id, :capacity ,presence: true
    # validate :validate_other_booking_overlap
    # validates :status, inclusion: {in: STATUS}



    belongs_to :user, class_name: "User", foreign_key: "user_id"
    # foreign_key: :user_id

    belongs_to :spot
    # foreign_key: :spot_id

    def period
        :check_in...:check_out
    end


    # def validate_other_booking_overlap
    #     #prevents OTHERS from booking when booked
    #     other_bookings = Booking.where("user_id = ? OR spot_id = ?", self.user_id, self.listing_id)

    #     #prevents self from double booking
    #     # other_bookings = Booking.where("user_id = ?", self.user_id)

    #     is_overlapping = other_bookings.any? do |booking|
    #         self.check_in < booking.check_out && booking.check_in < self.check_out
    #     end
    #     errors.add(:booking, "error, you already booked!") if is_overlapping
    # end
end