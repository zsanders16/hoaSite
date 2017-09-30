import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Modal, Button, Icon } from 'semantic-ui-react'

// Action
import {
  showEmail,
  clearEmail,
} from '../../actions/emails'

class EmailModal extends Component {
  state = { modalOpen: false }

  componentDidMount = () => {
    const { dispatch, email, emailId } = this.props
    if( Object.keys(email).length === 0 ) {
      this.loadEmailInformation( emailId )
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { emailId } = this.state
    const nextEmailId = nextProps.emailId
    if( nextEmailId && nextEmailId !== emailId ) {
      this.loadEmailInformation( nextEmailId )
    }
  }

  componentWillDismount = () => {
    const { dispatch } = this.props
    dispatch(clearEmail())
  }

  closeModal = () => this.setState({ modalOpen: false })

  loadEmailInformation = ( emailId ) => {
    this.props.dispatch(showEmail(emailId))
    this.setState({ modalOpen: true, emailId: emailId })
  }

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.closeModal}>
        <Modal.Content>
          <Segment basic>
            Emails data information
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color='green'
            onClick={this.closeModal}>
              <Icon name='close' />
              Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    email: state.emails.email,
  }
}

export default connect(mapStateToProps)(EmailModal)
