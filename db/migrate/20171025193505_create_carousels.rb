class CreateCarousels < ActiveRecord::Migration[5.1]
  def change
    create_table :carousels do |t|
      t.string :filename, null: false
      t.text :image, null: false
      t.integer :active, default: 1, null: false
      t.string :category, default: 'general', null: false

      t.timestamps
    end
  end
end
