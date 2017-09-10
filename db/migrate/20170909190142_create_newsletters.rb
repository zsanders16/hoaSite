class CreateNewsletters < ActiveRecord::Migration[5.1]
  def change
    create_table :newsletters do |t|
      t.string :name, null: false
      t.string :attachment

      t.timestamps
    end
  end
end
