class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :property_id, null: false
      t.integer :user_id, null: false
      t.text :body
      t.integer :accuracy
      t.integer :location
      t.integer :communication
      t.integer :check_in
      t.integer :cleanliness
      t.integer :value
      t.timestamps
    end
    add_index :reviews, :property_id
    add_index :reviews, :user_id
  end
end
