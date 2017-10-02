import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

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

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({ attachments: acceptedFiles })
  }

  // TODO: use FileBase64 for storing the files in the database
  render() {
    const { subject, body, recipients, attachments } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Select
          label='To:'
          inline
          options={[
            {key: 'homeowners', text: 'Home Owners', value: 'homeowners'},
            {key: 'Committee', text: 'Committee Members', value: 'committee'},
          ]}
          value={recipients}
          onChange={this.handleChange} />
        <Form.Input
          inline
          width={16}
          label='Subject'
          placeholder='...'
          id='subject'
          value={subject}
          onChange={this.handleChange} />
        <Form.TextArea
          label='Message'
          placeholder='Your message ...'
          id='body'
          value={body}
          onChange={this.handleChange} />
        <Dropzone
          onDrop={this.onDrop}
          accept='.pdf, .doc'
          multiple={true}>
          Drop files or Click to Open a File Dialog
        </Dropzone>
        <br />
        <Button
          type='submit'>
          Send!
        </Button>
      </Form>
    )
  }
}

export default connect()(EmailForm)
