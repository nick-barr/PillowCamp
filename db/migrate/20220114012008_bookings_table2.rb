class BookingsTable2 < ActiveRecord::Migration[6.1]
  def change
    
    drop_table :bookings

    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :user_id
      t.integer :capacity, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
    end
      add_index :bookings, :spot_id
      add_index :bookings, :user_id
  end
end