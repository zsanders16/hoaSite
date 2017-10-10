class CreateHomePages < ActiveRecord::Migration[5.1]
  def change
    create_table :home_pages do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :active, default: 0
      t.text :attachment
      t.string :attachment_name

      t.timestamps
    end
  end
end
