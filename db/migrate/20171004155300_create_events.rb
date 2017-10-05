class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :date, null: false
      t.text :description, null: false
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
