class ReviewsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :spot_id, null: false
      t.string :body,	null: false
      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :spot_id
  end
end
