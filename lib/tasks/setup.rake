namespace :setup do
  desc "Create Admin Modules"
  task admin_modules: :environment do
    NewslettersAdmin.create
    CcrAdmin.create
    Minute.create
    Legal.create
    Discussion.create
  end

end
