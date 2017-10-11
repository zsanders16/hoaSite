import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Table, Button } from 'semantic-ui-react'

// Actions
import {
  indexMembers,
  resetMembers,
} from '../../actions/members'

class Members extends Component {

  componentDidMount = () => this.load(this.props)
  componentWillReceiveProps = (nextProps) => this.load(nextProps)

  load = ( props ) => {
    const { dispatch, members } = props
    if( !members || members.length <= 0 ) {
      dispatch(indexMembers())
    }
  }

  displayMembers = () => {
    const { members } = this.props
    if( members && members.length > 0 ) {
      return members.map( member => {
        return (
          <Table.Row key={member.id}>
            <Table.Cell>{member.name}</Table.Cell>
            <Table.Cell>{member.email}</Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  render = () => {
    return (
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Member</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.displayMembers() }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={2}>
                &nbsp;
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    members: state.members.data,
  }
}

export default connect(mapStateToProps)(Members)
