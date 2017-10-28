import React, { Component } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import NewLinkForm from './NewLinkForm'

class NewLinkModal extends Component {
  state = { openModal: true }

  handleOnClose = () => {
    this.setState({ openModal: false },()=>this.props.handleCloseNewLink())
  }

  render = () => {
    const { openModal } = this.state
    return (
      <Modal
        open={openModal}
        onClose={this.handleOnClose}>
        <Modal.Content>
          <NewLinkForm handleOnClose={this.handleOnClose} />
        </Modal.Content>
        <Modal.Actions>
          <Button.Group size='mini'>
            <Button
              type='button'
              onClick={this.handleOnClose}>
              Exit
            </Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default NewLinkModal
