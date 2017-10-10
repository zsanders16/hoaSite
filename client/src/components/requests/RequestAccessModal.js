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
            Request Site Access from Board of Directors
          </Header.Content>
        </Header>
        <Modal.Content>
          <RequestAccessForm />
        </Modal.Content>
        <Modal.Actions>
          <Button
            type='button'
            onClick={this.handleOnClose}>
            Close Form
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default RequestAccessModal
