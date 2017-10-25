class AddIsAdminToMinutes < ActiveRecord::Migration[5.1]
  def change
    add_column :minutes, :isAdmin, :boolean, default: false
  end
end
