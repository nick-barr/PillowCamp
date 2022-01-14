class SpotsTableUpdate < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :sitetype, :string
    add_column :spots, :region, :string
  end
end
