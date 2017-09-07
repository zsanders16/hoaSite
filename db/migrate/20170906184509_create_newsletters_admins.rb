class CreateNewslettersAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :newsletters_admins do |t|
      t.string :name, default: 'newsletter'
      t.string :display_name, default: 'Newsletters'
      t.string :route, default: '/newsletters'
      t.string :security, default: 'admin'
      t.boolean :active, default: false
      
      t.timestamps
    end
  end
end
