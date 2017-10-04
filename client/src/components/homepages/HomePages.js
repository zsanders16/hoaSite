import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import moment from 'moment'
import Paginator from '../Paginator'

//Actions
import {
  indexHomePages
} from '../../actions/homepages'

class homepages extends Component {
  state = { hasMore: false }

  componentDidMount = () => {
    const { dispatch, homepages } = this.props
    if( !homepages || homepages.length <= 0 ) {
      dispatch(indexHomePages())
      this.setState({ hasMore: true })
    }
  }

  loadMore = ( page ) => {
    const { dispatch, pagination } = this.props
    const { hasMore } = this.state
    if( hasMore && pagination.total_pages ) {
      if( page <= pagination.total_pages ) {
        dispatch(indexHomePages(page))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  displayTableBodyRows = () => {
    const { homepages } = this.props
    if( homepages.length > 0 ) {
      return homepages.map( homePage => {
        return (
          <Table.Row key={homePage.id}>
            <Table.Cell>{homePage.title}</Table.Cell>
            <Table.Cell>{homePage.body}</Table.Cell>
            <Table.Cell>{moment(homePage.updated_at,"MM-DD-YYYY")}</Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Body Text</Table.HeaderCell>
            <Table.HeaderCell>Date Created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.displayTableBodyRows() }
        </Table.Body>
        <Table.Footer>
          <Paginator
            loadMore={this.loadMore}
            pagination={this.props.pagination} />
        </Table.Footer>
      </Table>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    homepages: state.homepages.data,
    pagination: state.homepages.pagination,
  }
}

export default connect(mapStateToProps)(homepages)
