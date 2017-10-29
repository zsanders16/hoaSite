import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Segment, Table, Button,
  Header, Icon, Image,
} from 'semantic-ui-react'
import Paginator from '../Paginator'
import styled from 'styled-components'
import EditImageModal from './EditImageModal'

// Actions
import {
  indexCarousel,
  activeCarousel,
  inactiveCarousel,
  resetCarousel,
} from '../../actions/carousel'

// Styed Components
const ButtonLabel = styled.div`
  display: inline-block;
  padding-right: 1rem;
  vertical-align: middle;
  font-weight: bold;
  :after {
    content: ':'
  }
`

class CarouselAdmin extends Component {
  state = {
    hasMore: false, filter: false,
    filterType: '', editImage: false,
    imageId: '', newImage: false,
  }

  componentDidMount = () => {
    const { dispatch, carousel } = this.props
    if( !carousel || carousel.length <= 0 ) {
      dispatch(indexCarousel())
    }
    if( carousel.length > 0 ) {
      this.setState({ hasMore: true })
    }
  }
  componentWillUnmount = () => this.props.dispatch(resetCarousel())

  handleActiveCarousel = () => {
    this.props.dispatch(activeCarousel())
    this.setState({ hasMore: true, filter: true, filterType: 'active' })
  }
  handleInactiveCarousel = () => {
    this.props.dispatch(inactiveCarousel())
    this.setState({ hasMore: true, filter: true, filterType: 'inactive' })
  }
  handleResetFilters = () => {
    this.props.dispatch(indexCarousel())
    this.setState({ filter: false, filterType: '' })
  }
  handleEditImage = ( imageId ) => this.setState({ editImage: true, imageId })
  handleNewImage = () => this.setState({ newImage: true })
  handleResetImage = () => this.setState({ editImage: false, imageId: '', newImage: false })

  loadMore = ( page ) => {
    const { dispatch, pagination } = this.props
    const { hasMore } = this.state
    const activeMethod = this.setActiveMethod()
    if( hasMore && pagination.total_pages ) {
      if( page <= pagination.total_pages ) {
        dispatch(activeMethod(page))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  setActiveMethod = () => {
    const { filter, filterType } = this.state
    if( filter ) {
      if( filterType === 'active' ) {
        return activeCarousel
      } else {
        return inactiveCarousel
      }
    } else {
      return indexCarousel
    }
  }

  displayCarouselImages = () => {
    const { carousel } = this.props
    if( carousel && carousel.length > 0 ) {
      return carousel.map( image => {
        return (
          <Table.Row key={image.id}>
            <Table.Cell>{image.filename}</Table.Cell>
            <Table.Cell>
              <Image
                size='mini'
                centered
                verticalAlign='middle'
                src={image.image}
                alt='N/A' />
            </Table.Cell>
            <Table.Cell>{image.category}</Table.Cell>
            <Table.Cell>{image.active ? 'Yes' : 'No'}</Table.Cell>
            <Table.Cell>
              <Button primary onClick={()=>this.handleEditImage(image.id)}>
                Edit
              </Button>
            </Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  render = () => {
    const  { filter, editImage, imageId, newImage } = this.state
    return (
      <Segment basic>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={5}>
              <Header as='h2' icon textAlign='center'>
                <Icon name='photo' circular />
                <Header.Content>
                  Carousel Images
                </Header.Content>
              </Header>
              <p>
                Instructions for uploading carousel images
              </p>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>File Name</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.displayCarouselImages() }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={5}>
              <ButtonLabel>Filter Images</ButtonLabel>
              { !filter ?
                <Button.Group size='mini'>
                  <Button primary onClick={this.handleActiveCarousel}>
                    Active
                  </Button>
                  <Button.Or />
                  <Button primary onClick={this.handleInactiveCarousel}>
                    Inactive
                  </Button>
                </Button.Group>
                :
                <Button.Group size='mini'>
                  <Button primary onClick={this.handleResetFilters}>
                    No Filter
                  </Button>
                </Button.Group>
              }
              {' '}
              <Button.Group size='mini'>
                <Button
                  primary
                  type='button'
                  onClick={this.handleNewImage}>
                  Add New Image
                </Button>
              </Button.Group>
              { editImage &&
                <EditImageModal
                  imageId={imageId}
                  handleResetImage={this.handleResetImage} />
              }
              { newImage &&
                <EditImageModal
                  newImage={newImage}
                  imageId=''
                  handleResetImage={this.handleResetImage} />
              }
              <Paginator
                loadMore={this.loadMore}
                pagination={this.props.pagination} />
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
    carousel: state.carousel.data,
    pagination: state.carousel.pagination,
  }
}

export default connect(mapStateToProps)(CarouselAdmin)
