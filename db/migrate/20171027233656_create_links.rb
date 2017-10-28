class CreateLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :links do |t|
      t.string :title, null: false
      t.string :link, null: false
      t.integer :active, null: false, default: 1
      t.string :category, null: false, default: 'general'

      t.timestamps
    end
  end
end
