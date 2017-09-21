class CreateLegals < ActiveRecord::Migration[5.1]
  def change
    create_table :legals do |t|
      t.string :name
      t.text :attachment

      t.timestamps
    end
  end
end
