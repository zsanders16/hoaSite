class CreateEmails < ActiveRecord::Migration[5.1]
  def change
    create_table :emails do |t|
      t.string :subject, null: false
      t.text :body, null: false
      t.string :recipients
      t.string :attachments

      t.timestamps
    end
  end
end
