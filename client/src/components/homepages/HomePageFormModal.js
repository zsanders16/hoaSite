import React, { Component } from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import HomePageForm from './HomePageForm'

class HomePageFormModal extends Component {
  state = { openModal: false, homePageId: '' }

  componentDidMount = () => {
    const { homePageId } = this.props
    if( homePageId )
        this.setState({ homePageId: this.props.homePageId, openModal: true })
  }
  componentWillReceiveProps = ( nextProps ) => {
    const { homePageId } = this.state
    if( homePageId !== nextProps.homePageId ) {
      this.setState({ homePageId: nextProps.homePageId, openModal: true })
    }
  }

  handleCloseModal = () => this.setState({ openModal: false })

  render() {
    const { homePageId } = this.state
    return (
      <Modal
        open={this.state.openModal}
        onClose={this.handleCloseModal}>
        <Header
          icon='wpforms'
          size='large'
          circular
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
