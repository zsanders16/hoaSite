namespace :load do |loader_namespace|
  desc "Load Test Emails"
  task emails: :environment do
    Email.destroy_all

    attachments = %w[doc txt pdf excel ppt]

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
    fileImage = '/Users/biosci/Pictures/Jesus and Javascript.png'
    20.times do
      HomePage.create(
        title: Faker::Lorem.sentence,
        body: Faker::Lorem.paragraph(6),
        active: true,
        attachment: 'data:image/png;base64,' + Base64.encode64(open(fileImage).read),
        attachment_name: 'txtFileName.txt'
      )
    end
  end

  desc "Load Test Events for Home Page"
  task events: :environment do
    Event.destroy_all

    status = [true,false]

    20.times do
      Event.create(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraph(5),
        date: Time.now,
        active: status.sample
      )
    end
  end

  task :all do
    loader_namespace.tasks.each do |task|
      Rake::Task[task].invoke
    end
  end

end
