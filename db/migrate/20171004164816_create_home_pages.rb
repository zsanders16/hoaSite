class CreateHomePages < ActiveRecord::Migration[5.1]
  def change
    create_table :home_pages do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
