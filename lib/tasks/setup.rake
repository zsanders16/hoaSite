namespace :setup do
  desc "Create Admin Modules"
  task admin_modules: :environment do
    NewslettersAdmin.create
    CcrAdmin.create
    MinutesAdmin.create
    LegalAdmin.create
    DiscussionAdmin.create
    User.create(email: 'admin@test.com', name: 'Admin User', password: 'password', password_confirmation: 'password', admin: true)
  end

end
