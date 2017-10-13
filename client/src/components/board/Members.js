import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Table, Header, Icon } from 'semantic-ui-react'

// Actions
import {
  indexMembers,
  resetMembers,
} from '../../actions/members'

class Members extends Component {

  componentDidMount = () => this.load(this.props)
  componentWillReceiveProps = (nextProps) => this.load(nextProps)
  componentWillUnmount = () => {
    const { dispatch } = this.props
    dispatch(resetMembers())
  }

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
            <Table.Cell>{member.title}</Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  render = () => {
    return (
      <Segment>
        <Header as='h1' icon textAlign='center'  size='huge'>
          <Icon name='group' circular/>
          <Header.Content>
            Woodstock Village Home Owners Association
          </Header.Content>
          <Header.Subheader
            style={{ fontSize: '2rem', fontWeight: 'bold'}}>
             Board Members
          </Header.Subheader>
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Member</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
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
