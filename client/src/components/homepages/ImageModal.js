import React, { Component } from 'react'
import { Modal, Button, Header, Icon, Segment } from 'semantic-ui-react'

class ImageModal extends Component {
  state = { openModal: true }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ openModal: true })
    nextProps.closeImage()
  }
  handleCloseModal = () => this.setState({ openModal: false })

  render() {
    const { openModal } = this.state
    const { homePage } = this.props
    return (
      <Modal
        open={openModal}
        onClose={this.handleCloseModal}>
        <Header icon textAlign='center'>
          <Icon name='image' circular />
          <Header.Content>
            Stored Home Page Header Image
          </Header.Content>
        </Header>
        <Modal.Content>
          <Segment> 
            <img
              alt='Related to WoodStock Village'
              src={homePage.attachment}
              title={homePage.attachment_name}></img>
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button
            primary
            type='button'
            onClick={this.handleCloseModal}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ImageModal
