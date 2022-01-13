class ChangeSpotsTable < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :price, :integer
  end
end
