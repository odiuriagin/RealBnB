class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :address, null: false
      t.text :description, null: false
      t.integer :host_id, null: false
      t.integer :price, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.boolean :wifi, null: false, default: false
      t.boolean :cable_tv, null: false, default: false
      t.boolean :washer, null: false, default: false
      t.boolean :kitchen, null: false, default: false
      t.boolean :breakfast, null: false, default: false

      t.timestamps
    end
    add_index :properties, :host_id
    add_index :properties, :address, unique: true
  end
end
