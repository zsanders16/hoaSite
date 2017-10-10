import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class RequestAccessForm extends Component {
  defaults = {
    id: '', subject: '', from: '', to: '', message: ''
  }
  state = { ...this.defaults }

  handleOnChange = ({ target: {id,value} }) => this.setState({ [id]: value })
  handleNewForm = () => this.setState({ ...this.defaults })
  handleOnSubmit = ( event ) => {
    event.preventDefault()
    debugger
  }

  render = () => {
    const { id, subject, from, to, message } = this.state
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Input
          label='Subject'
          id='subject'
          value={subject}
          onChange={this.handleOnChange} />
        <Form.Input
          label='From'
          id='from'
          value={from}
          onChange={this.handleOnChange} />
        <Form.Input
          label='To'
          id='to'
          value={to}
          onChange={this.handleOnChange} />
        <Form.TextArea
          label='Message'
          id='message'
          value={message}
          onChange={this.handleOnChange} />
        <Segment basic clearing>
          <Button.Group size='mini' floated='right'>
            <Button
              type='submit'
              onClick={this.handleOnSubmit}>
              Send
            </Button>
            <Button.Or />
            <Button
              type='button'
              onClick={this.handleNewForm}>
              New Form
            </Button>
          </Button.Group>
        </Segment>
      </Form>
    )
  }
}

export default RequestAccessForm
