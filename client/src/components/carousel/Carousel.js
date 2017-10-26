import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import CarouselImage from './CarouselImage'
import CarouselPaginator from './CarouselPaginator'

// Actions
import {
  indexCarousel,
  activeCarousel,
  inactiveCarousel,
  resetCarousel,
} from '../../actions/carousel'

class Carousel extends Component {
  state = { hasMore: false }

  componentDidMount = () => {
    const { dispatch, carousel } = this.props
    if( carousel.length <= 0 ) {
      dispatch(indexCarousel())
    }
    this.setState({ hasMore: true })
  }

  loadMore = ( page ) => {
    const { dispatch, pagination } = this.props
    const { hasMore } = this.state
    if( hasMore && pagination.total_pages ) {
      if( page <= pagination.total_pages ) {
        dispatch(indexCarousel(page))
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  displayCarouselImages = () => {
    const { carousel } = this.props
    if( carousel.length > 0 ) {
      return carousel.map( image => {
        return (
          <CarouselImage key={image.id} image={image} />
        )
      })
    }
  }

  render = () => {
    return (
      <Grid>
        <Grid.Row style={{ paddingBottom: '0'}}>
          <Grid.Column
            width={16}
            textAlign='center'>
            <Image.Group>
              { this.displayCarouselImages() }
            </Image.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingTop: '0'}}>
          <Grid.Column
            width={16}
            textAlign='center'>
            <CarouselPaginator
              loadMore={this.loadMore}
              size='mini'
              pagination={this.props.pagination} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    carousel: state.carousel.data,
    pagination: state.carousel.pagination,
  }
}

export default connect(mapStateToProps)(Carousel)
