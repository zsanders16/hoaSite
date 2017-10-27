import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class CarouselImage extends Component {
  state = { width: '15%' }

  handleSizeIncrease = () => this.setState({ width: '17%' })
  handleSizeDecrease = () => this.setState({ width: '15%' })

  render = () => {
    const { width } = this.state
    const { filename, image } = this.props.image
    return (
        <Image
          content={filename}
          src={image}
          width={width}
          onMouseOver={this.handleSizeIncrease}
          onMouseOut={this.handleSizeDecrease} />
    )
  }
}

export default CarouselImage
