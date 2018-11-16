class AddBodyToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :body, :text
  end
end
