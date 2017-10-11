import React, { Component } from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import HomePageForm from './HomePageForm'

class HomePageFormModal extends Component {
  state = { openModal: false, homePageId: '' }

  componentDidMount = () => {
    this.openModal( this.props )
  }

  componentWillReceiveProps = ( nextProps ) => this.openModal( nextProps )

  openModal = ( props ) => {
    const { homePageId } = this.state
    if( props.homePageId ) {
      this.setState({ homePageId: props.homePageId, openModal: true })
    }
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
    this.props.clearHomePageId()
  }

  render() {
    const { homePageId } = this.state
    return (
      <Modal
        open={this.state.openModal}
        onClose={this.handleCloseModal}>
        <Header
          icon='wpforms'
          size='large'
          content='Home Page Information Form' />
        <Modal.Content>
          <HomePageForm
            homePageId={homePageId}
            closeFormModal={this.handleCloseModal} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCloseModal}>
            Close Form
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default HomePageFormModal
