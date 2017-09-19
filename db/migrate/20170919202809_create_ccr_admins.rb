class CreateCcrAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :ccr_admins do |t|
      t.string :name, default: 'ccr'
      t.string :display_name, default: 'CCRs | ByLaws'
      t.string :route, default: '/ccrs'
      t.string :security, default: 'admin'
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
