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
    fileImage = '/Users/biosci/Pictures/TestHeader.png'
    20.times do
      HomePage.create(
        title: Faker::Lorem.sentence,
        body: Faker::Lorem.paragraph(6),
        active: [1,0].sample,
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

  desc "Load Test Images for Carousel Model"
  task carousel: :environment do
    Carousel.destroy_all

    true_false = [0,1]
    file_image = '/Users/biosci/Pictures/carouselImage.png'

    30.times do
      Carousel.create(
        filename: Faker::File.file_name('/my/secret/path','imagefile','png'),
        image: 'data:image/png;base64,' + Base64.encode64(open(file_image).read),
        active: true_false.sample,
        category: Faker::Lorem.word,
      )
    end
  end

  desc "Load Test Links for Link Model"
  task links: :environment do
    Link.destroy_all

    10.times do
      Link.create(
        title: Faker::Lorem.words(3).join(' '),
        link: Faker::Internet.url,
        active: [0,1].sample,
        category: %w[General Safety Community City State].sample
      )
    end
  end

  task :all do
    loader_namespace.tasks.each do |task|
      Rake::Task[task].invoke
    end
  end

end
