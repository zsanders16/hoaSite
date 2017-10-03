class HomeownerMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.homeowner_mailer.homeowners.subject
  #
  def homeowners(email, recipients)
    @body = email.body
    mail to: recipients, subject: email.subject
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.homeowner_mailer.commitee.subject
  #
  def committee(email, recipients)
    @body = email.body
    mail to: recipients, subject: email.subject
  end
end
