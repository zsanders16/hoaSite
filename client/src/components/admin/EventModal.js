import React, { Component } from 'react'
import { Modal, Button, Header } from 'semantic-ui-react'
import EventForm from './EventForm'

class EventModal extends Component {
  state = { openModal: true }

  componentWillReceiveProps = ( nextProps ) => this.setState({ openModal: true })
  handleClose = () => {
    this.setState({ openModal: false })
    this.props.closeEventModal()
  }

  render() {
    return (
      <Modal
        open={this.state.openModal}
        onClose={this.handleClose}>
        <Header as='h1' icon='calendar' content='Event Information' />
        <Modal.Content>
          <EventForm
            eventId={this.props.eventId}
            closeFormModal={this.handleClose} />
        </Modal.Content>
        <Modal.Actions>
          <Button
            primary
            type='button'
            onClick={this.handleClose}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EventModal
