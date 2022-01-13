class CreateSpots < ActiveRecord::Migration[6.1]

  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :details,	null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :lodging,	null: false, array: true
      t.string :essentials, null: false, array: true
      t.string :amenities, null: false, array: true
      t.timestamps
    end

    add_index :spots, :latitude
    add_index :spots, :longitude
  end
end
