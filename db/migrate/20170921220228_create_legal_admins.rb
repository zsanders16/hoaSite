class CreateLegalAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :legal_admins do |t|
      t.string :name, default: 'legal'
      t.string :display_name, default: 'Legal'
      t.string :route, default: '/legal'
      t.string :security, default: 'admin'
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
