import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'semantic-ui-react'
import EmailDetails from './EmailDetails'

// Action
import {
  showEmail,
  clearEmail,
} from '../../actions/emails'

class EmailModal extends Component {
  state = { modalOpen: false }

  componentDidMount = () => {
    const { email, emailId } = this.props
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
    this.props.dispatch(showEmail(emailId, ()=>
      this.setState({ modalOpen: true, emailId: emailId })
    ))
  }

  render() {
    const { email } = this.props
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.closeModal}>
        <Modal.Content>
          <EmailDetails email={email} />
        </Modal.Content>
        <Modal.Actions>
          <Button
            primary
            onClick={this.closeModal}>
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
