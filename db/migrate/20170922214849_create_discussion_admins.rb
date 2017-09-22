class CreateDiscussionAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :discussion_admins do |t|
      t.string :name, default: 'discussion'
      t.string :display_name, default: 'Discussion Forum'
      t.string :route, default: '/discussion'
      t.string :security, default: 'admin'
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
