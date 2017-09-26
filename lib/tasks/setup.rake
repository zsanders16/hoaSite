namespace :setup do
  desc "Create Admin Modules"
  task admin_modules: :environment do
    NewslettersAdmin.create
    CcrAdmin.create
    MinutesAdmin.create
    LegalAdmin.create
    DiscussionAdmin.create
  end

end
