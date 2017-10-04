namespace :load do
  desc "Load Test Emails"
  task emails: :environment do
    Email.destroy_all

    attachments = %w[pdf excel doc text html]

    20.times do
      Email.create(
        subject: Faker::Lorem.sentence,
        body: Faker::Lorem.paragraph(5),
        recipients: Faker::Internet.email,
        attachments: attachments.sample
      )
    end
  end

  desc "Load Test Home Pages"
  task homepages: :environment do
    HomePage.destroy_all
    @images = Dir[::Rails.root.join('public','favicon.ico')]
    20.times do
      HomePage.create(
        title: Faker::Lorem.sentence,
        body: Faker::Lorem.paragraph(6),
        image: File.open(@images.first)
      )
    end
  end

end
