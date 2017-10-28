import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Segment, Button } from 'semantic-ui-react'
import Paginator from '../Paginator'
import NewLinkModal from './NewLinkModal'

// Actions
import {
  indexLinks,
  deleteLink,
  resetLinks,
} from '../../actions/links'

class LinksAdmin extends Component {
  state = { hasMore: false }

  componentDidMount = () => this.loadLinks( this.props )
  componentWillUnmount = () => this.props.dispatch(resetLinks())

  loadLinks = ( props ) => {
    const { dispatch, links } = this.props
    if( !links || links.length <= 0 ) {
      dispatch(indexLinks())
      this.setState({ hasMore: true })
    }
  }

  loadMore = ( page ) => {
    const { hasMore } = this.state
    const { dispatch, pagination } = this.props
    if( hasMore && pagination.total_pages ) {
      if( page <= pagination.total_pages ) {
        dispatch(indexLinks(page))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  displayLinks = () => {
    const { links } = this.props
    if( links && links.length > 0 ) {
      return links.map( link => {
        return (
          <Table.Row key={link.id}>
            <Table.Cell>{link.title}</Table.Cell>
            <Table.Cell>{link.link}</Table.Cell>
            <Table.Cell>{ link.active ? 'Active' : 'Inactive' }</Table.Cell>
            <Table.Cell>{link.category}</Table.Cell>
            <Table.Cell>
              <Button
                size='mini'
                type='button'
                onClick={()=>this.handleDeleteLink(link.id)}>
                Remove
              </Button>
            </Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  handleDeleteLink = ( linkId ) => {
    this.props.dispatch(deleteLink(linkId))
  }

  handleNewLink = () => this.setState({ newLink: true })
  handleCloseNewLink = () => this.setState({ newLink: false })

  render = () => {
    const { newLink } = this.state
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.displayLinks() }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={5}>
              <Button.Group size='mini'>
                <Button
                  type='button'
                  onClick={this.handleNewLink}>
                  New Link
                </Button>
              </Button.Group>
              <Paginator
                loadMore={this.loadMore}
                pagination={this.props.pagination} />
              { newLink &&
                <NewLinkModal handleCloseNewLink={this.handleCloseNewLink} />
              }
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    links: state.links.data,
    pagination: state.links.pagination,
  }
}

export default connect(mapStateToProps)(LinksAdmin)
