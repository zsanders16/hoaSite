import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import moment from 'moment'
import Paginator from '../Paginator'
import HomePageFormModal from './HomePageFormModal'
import ImageModal from './ImageModal'

//Actions
import {
  indexHomePages,
} from '../../actions/homepages'

class homepages extends Component {
  state = { hasMore: false, homePageId: '', showImage: false }

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

  handleRowClick = ( homePageId ) => this.setState({ homePageId })
  clearHomePageId = () => this.setState({ homePageId: '' })
  showNewHomePageForm = () => this.setState({ homePageId: true })
  handleShowImage = ( homePage ) => this.setState({ showImage: homePage })
  closeImage = () => this.setState({ showImage: false })

  displayTableBodyRows = () => {
    const { homepages } = this.props
    if( homepages.length > 0 ) {
      return homepages.map( homePage => {
        return (
          <Table.Row
            key={homePage.id}>
            <Table.Cell>{homePage.title.substr(0,30)}</Table.Cell>
            <Table.Cell>{homePage.body.substr(0,70)}</Table.Cell>
            <Table.Cell>
              <Button
                type='button'
                onClick={()=>this.handleShowImage(homePage)}>
                Show
              </Button>
            </Table.Cell>
            <Table.Cell>{moment(homePage.updated_at).format("MM-DD-YYYY")}</Table.Cell>
            <Table.Cell>{ homePage.active === 1 ? 'Active' : 'Inactive' }</Table.Cell>
            <Table.Cell>
              <Button
                type='button'
                onClick={()=>this.handleRowClick(homePage.id)}>
                View
              </Button>
            </Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  render() {
    const { homePageId, showImage } = this.state
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Body Text</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Date Created</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.displayTableBodyRows() }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={4}>
              { homePageId &&
                <HomePageFormModal
                  homePageId={homePageId}
                  clearHomePageId={this.clearHomePageId} />
              }
              { showImage &&
                <ImageModal
                  homePage={showImage}
                  closeImage={this.closeImage} />
              }
              <Button
                type='button'
                onClick={this.showNewHomePageForm} >
                New Home Page Entry
              </Button>
              <Paginator
                loadMore={this.loadMore}
                pagination={this.props.pagination} />
            </Table.HeaderCell>
          </Table.Row>
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
