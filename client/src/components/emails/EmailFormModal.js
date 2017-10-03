import React, { Component } from 'react'
import { Modal, Header, Icon, Button } from 'semantic-ui-react'
import EmailForm from './EmailForm'

class EmailFormModal extends Component {
  state = { openModal: false }

  componentDidMount = () => this.setState({ openModal: true })
  handleOnClose = () => this.setState({ openModal: false })

  render() {
    return (
      <Modal
        open={this.state.openModal}
        onClose={this.handleOnClose}>
        <Header as='h2' icon textAlign='center'>
          <Icon name='mail outline' circular />
          <Header.Content>
            New Email Message
          </Header.Content>
        </Header>
        <Modal.Content>
          <EmailForm closeModal={this.handleOnClose}/>
        </Modal.Content>
        <Modal.Actions>
          <Button
            type='button'
            onClick={this.handleOnClose}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EmailFormModal
