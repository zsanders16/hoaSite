import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paginator from '../Paginator'
import { Segment, Table, Button, Checkbox } from 'semantic-ui-react'
import EmailModal from './EmailModal'
import EmailFormModal from './EmailFormModal'

// Actions
import {
  indexEmails,
  resetEmails,
  deleteEmails,
} from '../../actions/emails'

class Emails extends Component {
  state = { hasMore: false, emailId: '', emailForm: false, checkedEmails: [] }

  componentDidMount = () => {
    const { dispatch, emails, pagination } = this.props
    if( !emails || pagination.total_pages <= 0 ) {
      dispatch(indexEmails())
      this.setState({ hasMore: true })
    }
  }

  handleCheckbox = ( emailId ) => {
    const { checkedEmails } = this.state
    this.setState({
      checkedEmails: [
        ...checkedEmails,
        emailId,
      ]
    })
  }

  handleSelectAll = ( event, data ) => {
    const { emails } = this.props
    if( data.checked )
      this.setState({ checkedEmails: emails.map( e => e.id )})
    else
      this.setState({ checkedEmails: [] })
  }

  dispayTableRows = () => {
    const { emails } = this.props
    const { checkedEmails } = this.state
    if( emails && emails.length > 0 ) {
      return emails.map( email => {
        const checkedState = checkedEmails.includes(email.id)
        return (
          <Table.Row
            key={email.id}>
            <Table.Cell>
              <Checkbox
                checked={ checkedState }
                onChange={()=>this.handleCheckbox(email.id)} />
            </Table.Cell>
            <Table.Cell>
              <Button
                size='mini'
                onClick={()=>this.showEmail(email.id)}>
                View
              </Button>
            </Table.Cell>
            <Table.Cell>{email.subject}</Table.Cell>
            <Table.Cell>{email.body}</Table.Cell>
            <Table.Cell>{email.recipients}</Table.Cell>
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

  handleNewEmail = () => this.setState({ emailForm: true })

  handleDeleteEmails = () => {
    const { checkedEmails } = this.state
    const { dispatch } = this.props
    dispatch(deleteEmails(checkedEmails))
    dispatch(indexEmails())
    this.setState({ checkedEmails: [] })
  }

  render() {
    const { emailId, emailForm, checkedEmails } = this.state
    return (
      <Segment basic>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Checkbox
                  onChange={this.handleSelectAll} />
              </Table.HeaderCell>
              <Table.HeaderCell>View</Table.HeaderCell>
              <Table.HeaderCell>Subject</Table.HeaderCell>
              <Table.HeaderCell>Body</Table.HeaderCell>
              <Table.HeaderCell>Recipients</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.dispayTableRows() }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={5}>
                <Button
                  type='button'
                  onClick={this.handleNewEmail}>
                  New Email
                </Button>
                <Button
                  type='button'
                  onClick={this.handleDeleteEmails}
                  disabled={ checkedEmails.length <= 0 }>
                  Delete
                </Button>
                <Paginator
                  loadMore={this.loadMore}
                  pagination={this.props.pagination} />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        { emailForm &&
          <EmailFormModal />
        }
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
