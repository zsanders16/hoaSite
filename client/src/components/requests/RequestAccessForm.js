import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'

// Actions
import {
  createRequestAccess,
} from '../../actions/requests'

class RequestAccessForm extends Component {
  defaults = {
    id: '', subject: '', from: '', to: 'devmountaintest@gmail.com', message: ''
  }
  state = { ...this.defaults }

  // componentDidMount = () => this.load(this.props)
  // componentWillReceiveProps = (nextProps) => this.load(nextProps)
  //
  // load = ( props ) => {
  //   const { dispatch, toList } = props
  //   if( !toList || toList.length <= 0 ) {
  //     dispatch(indexToAddresses())
  //   }
  // }

  handleOnChange = ({ target: {id,value} }) => this.setState({ [id]: value })

  handleSelectOnChange = ( event, data ) => {
    this.setState({ [data.id]: data.value })
  }

  handleNewForm = () => this.setState({ ...this.defaults })

  handleOnSubmit = ( event ) => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(createRequestAccess(this.state))
    this.props.handleOnClose()
  }

  render = () => {
    const { subject, from, to, message } = this.state
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Input
          required
          label='Subject'
          id='subject'
          value={subject}
          onChange={this.handleOnChange} />
        <Form.Input
          required
          label='From'
          id='from'
          value={from}
          onChange={this.handleOnChange} />
        <Form.Select
          required
          label='To'
          id='to'
          options={[
            { key: 'hoa', text: 'HOA Board Members', value: 'hoatestemail@gmail.com'}
          ]}
          value={to}
          onChange={this.handleSelectOnChange} />
        <Form.TextArea
          required
          label='Message'
          id='message'
          value={message}
          onChange={this.handleOnChange} />
        <Segment basic clearing>
          <Button.Group size='tiny' floated='right'>
            <Button
              primary
              type='submit'
              onClick={this.handleOnSubmit}>
              Send
            </Button>
            <Button.Or />
            <Button
              primary
              type='button'
              onClick={this.handleNewForm}>
              Clear Form
            </Button>
          </Button.Group>
        </Segment>
      </Form>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    toList: state.requests.to,
  }
}

export default connect(mapStateToProps)(RequestAccessForm)
