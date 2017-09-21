class CreateMinutesAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :minutes_admins do |t|
      t.string :name, default: 'minutes'
      t.string :display_name, default: 'Meeting Minutes'
      t.string :route, default: '/minutes'
      t.string :security, default: 'admin'
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
