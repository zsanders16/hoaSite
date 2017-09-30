namespace :load do
  desc "TODO"
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

end
