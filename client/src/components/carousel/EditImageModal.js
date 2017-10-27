import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'semantic-ui-react'
import CarouselImageForm from './CarouselImageForm'


class EditImageModal extends Component {
  state = { openModal: true, activeImage: '' }

  componentDidMount = () => this.loadImage(this.props)
  componentWillReceiveProps = ( props ) => this.loadImage(props)
  loadImage = ( props ) => {
    if( props.newImage ) {
      this.setState({ openModal: true })
    } else {
      const { imageId: {id} } = props
      this.setState({
        openModal: true,
        activeImage: this.props.carousel.find( image => image.id === id ),
      })
    }
  }

  handleOnClose = () => {
    this.setState({ openModal: false },this.props.handleResetImage)
  }

  render = () => {
    const { openModal, activeImage } = this.state
    return (
      <Modal
        open={openModal}
        onClose={this.handleOnClose}>
        <Modal.Content>
          <CarouselImageForm
            activeImage={activeImage}
            handleOnClose={this.handleOnClose} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleOnClose} color='red'>
            Back
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    carousel: state.carousel.data,
  }
}

export default connect(mapStateToProps)(EditImageModal)
