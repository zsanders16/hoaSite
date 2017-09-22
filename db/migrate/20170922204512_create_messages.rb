class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :title
      t.text :description
      t.string :user_created
      t.boolean :archive

      t.timestamps
    end
  end
end
