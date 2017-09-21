class CreateMinutes < ActiveRecord::Migration[5.1]
  def change
    create_table :minutes do |t|
      t.string :name
      t.text :attachment

      t.timestamps
    end
  end
end
