import React, { Component } from 'react'
import { Segment, Header, Button, Icon } from 'semantic-ui-react'
import RequestAccessModal from './RequestAccessModal'

class Access extends Component {
  state = { requestAccess: false }

  handleAccessRequest = () => this.setState({ requestAccess: true })
  handleCloseModal = () => this.setState({ requestAccess: false })

  render = () => {
    const { requestAccess } = this.state
    return (
      <Segment basic>
        <Header as='h3' textAlign='center'>Site Access Requests</Header>
        <p style={{ textAlign: 'justify' }}>
          To reach the Board of Directors, please click the icon below
        </p>
        <Segment basic textAlign='center'>
          <Button
            circular
            icon='mail'
            type='button'
            onClick={this.handleAccessRequest} />
        </Segment>
        { requestAccess &&
          <RequestAccessModal handleCloseModal={this.handleCloseModal} />
        }
      </Segment>
    )
  }
}

export default Access
