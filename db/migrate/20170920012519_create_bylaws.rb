class CreateBylaws < ActiveRecord::Migration[5.1]
  def change
    create_table :bylaws do |t|
      t.string :name, null: false
      t.text :attachment

      t.timestamps
    end
  end
end
