class HomeownerMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.homeowner_mailer.homeowners.subject
  #
  def homeowners
    @greeting = "Hi"

    mail to: "to@example.org"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.homeowner_mailer.commitee.subject
  #
  def commitee
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
