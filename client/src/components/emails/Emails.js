import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paginator from '../Paginator'
import { Segment, Table } from 'semantic-ui-react'
import EmailModal from './EmailModal'

// Actions
import {
  indexEmails,
  resetEmails,
} from '../../actions/emails'

class Emails extends Component {
  state = { hasMore: false, emailId: '' }

  componentDidMount = () => {
    const { dispatch, emails, pagination } = this.props
    if( !emails || pagination.total_pages <= 0 ) {
      dispatch(indexEmails())
      this.setState({ hasMore: true })
    }
  }

  dispayTableRows = () => {
    const { emails } = this.props
    if( emails && emails.length > 0 ) {
      return emails.map( email => {
        return (
          <Table.Row
            key={email.id}
            onClick={()=>this.showEmail(email.id)}>
            <Table.Cell>{email.subject}</Table.Cell>
            <Table.Cell>{email.body}</Table.Cell>
            <Table.Cell>{email.recipients}</Table.Cell>
            <Table.Cell>{email.attachments}</Table.Cell>
            <Table.Cell>{email.created_at}</Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  showEmail = ( emailId ) => this.setState({ emailId })

  loadMore = ( page ) => {
    const { pagination, dispatch } = this.props
    const { hasMore, query } = this.state
    if( hasMore && pagination.total_pages ) {
      if( page <= pagination.total_pages ) {
        dispatch(indexEmails(page))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }


  render() {
    const { emailId } = this.state
    return (
      <Segment basic>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Subject</Table.HeaderCell>
              <Table.HeaderCell>Body</Table.HeaderCell>
              <Table.HeaderCell>Recipients</Table.HeaderCell>
              <Table.HeaderCell>Attachements</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.dispayTableRows() }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={5}>
                <Paginator
                  loadMore={this.loadMore}
                  pagination={this.props.pagination} />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        { emailId &&
          <EmailModal emailId={emailId} />
        }
      </Segment>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    emails: state.emails.data,
    pagination: state.emails.pagination,
  }
}

export default connect(mapStateToProps)(Emails)
