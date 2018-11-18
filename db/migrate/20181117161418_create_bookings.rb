class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :property_id, null: false
      t.date :check_in, null: false
      t.date :check_out, null: false
      t.integer :num_people, null: false
      t.timestamps
    end
    add_index :bookings, :user_id
    add_index :bookings, :property_id
  end
end
