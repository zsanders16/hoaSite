import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
// import Dropzone from 'react-dropzone'

// Actions
import {
  createEmail,
} from '../../actions/emails'

class EmailForm extends Component {
  defaults = {
    id: '', subject: '', body: '',
    recipients: '', attachments: '',
  }
  state = { ...this.defaults }

  handleChange = ( event ) => {
    const { id, value } = event.target
    this.setState({ [id]: value })
  }

  handleRecipients = ( event, data ) => this.setState({ [data.id]: data.value })

  handleSubmit = ( event ) => {
    event.preventDefault()
    const { dispatch, closeModal } = this.props
    dispatch(createEmail(this.state))
    closeModal()
  }

  // onDrop = (acceptedFiles, rejectedFiles) => {
  //   this.setState({ attachments: acceptedFiles })
  // }

  // TODO: use FileBase64 for storing the files in the database
  render() {
    const { subject, body, recipients, attachments } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Select
          required
          label='To:'
          inline
          id='recipients'
          options={[
            {key: 'homeowners', text: 'Home Owners', value: 'homeowners'},
            {key: 'committee', text: 'Committee Members', value: 'committee'},
          ]}
          value={recipients}
          onChange={this.handleRecipients} />
        <Form.Input
          required
          inline
          width={16}
          label='Subject'
          placeholder='...'
          id='subject'
          value={subject}
          onChange={this.handleChange} />
        <Form.TextArea
          required
          label='Message'
          placeholder='Your message ...'
          id='body'
          value={body}
          onChange={this.handleChange} />
        <br />
        <Button
          primary
          type='submit'>
          Send!
        </Button>
      </Form>
    )
  }
}
// <Dropzone
//   onDrop={this.onDrop}
//   accept='.pdf, .doc'
//   multiple={true}>
//   Drop files or Click to Open a File Dialog
// </Dropzone>
export default connect()(EmailForm)
