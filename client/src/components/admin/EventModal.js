import React, { Component } from 'react'
import { Modal, Button, Header, Icon } from 'semantic-ui-react'
import EventForm from './EventForm'

class EventModal extends Component {
  state = { openModal: true }

  componentWillReceiveProps = ( nextProps ) => this.setState({ openModal: true })
  handleClose = () => this.setState({ openModal: false })

  render() {
    return (
      <Modal
        open={this.state.openModal}
        onClose={this.handleClose}>
        <Header as='h1' icon='calendar' content='Events Information' />
        <Modal.Content>
          <EventForm eventId={this.props.eventId} />
        </Modal.Content>
        <Modal.Actions>
          <Button
            type='button'
            onClick={this.handleClose}>
            Back
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EventModal
