class AccessMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.access_mailer.request.subject
  #
  def access_request(form_data)
    @message = form_data[:message]
    mail to: form_data[:to], subject: form_data[:subject]
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.access_mailer.granted.subject
  #
  def granted(form_data)
    @message = form_data[:message]
    mail to: form_data[:to], from: form_data[:from], subject: form_data[:subject]
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.access_mailer.denied.subject
  #
  def denied(form_data)
    @message = form_data[:message]
    mail to: form_data[:to], from: form_data[:from], subject: form_data[:subject]
  end
end
