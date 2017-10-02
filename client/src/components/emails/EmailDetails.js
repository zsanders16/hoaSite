import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'

const EmailDetails = ({ email }) => (
  <Segment basic>
    <Header as='h4'>Recipients</Header>
    {email.recipients}
    <Header as='h4'>Subject</Header>
    {email.subject}
    <Header as='h4'>Message</Header>
    {email.body}
    <Header as='h4'>Attachments</Header>
    {email.attachments}
  </Segment>
)

export default EmailDetails
