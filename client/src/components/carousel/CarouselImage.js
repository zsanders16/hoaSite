import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class CarouselImage extends Component {
  state = {}

  render = () => {
    const { image: {filename, image}, width } = this.props
    return (
        <Image
          content={filename}
          src={image}
          width={width} />
    )
  }
}

export default CarouselImage
