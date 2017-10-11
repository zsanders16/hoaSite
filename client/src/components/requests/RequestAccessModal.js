import React, { Component } from 'react'
import { Modal, Button, Header, Icon } from 'semantic-ui-react'
import RequestAccessForm from './RequestAccessForm'

class RequestAccessModal extends Component {
  state = { openModal: true }

  handleOnClose = () => {
    this.setState({ openModal: false })
    this.props.handleCloseModal()
  }

  render = () => {
    const { openModal } = this.state
    return (
      <Modal
        open={openModal}
        onClose={this.handleOnClose}>
        <Header>
          <Icon name='mail' size='large' />
          <Header.Content>
            Contact Board of Directors
          </Header.Content>
        </Header>
        <Modal.Content>
          <RequestAccessForm handleOnClose={this.handleOnClose} />
        </Modal.Content>
        <Modal.Actions>
          <Button
            primary
            type='button'
            onClick={this.handleOnClose}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default RequestAccessModal
