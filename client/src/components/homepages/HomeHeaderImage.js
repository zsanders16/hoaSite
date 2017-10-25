import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

import {
  loadHeaderImage,
} from '../../actions/homepage'

class HomeHeaderImage extends Component {

  // TODO: Load the header image from the server
  componentDidMount = () => {
    const { dispatch, headerImage } = this.props
    if( !headerImage ) {
      dispatch(loadHeaderImage())
    }
  }

  render = () => {
    const { headerImage } = this.props
    return (
      <Image
        fluid
        verticalAlign='middle'
        src={ headerImage } />
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    headerImage: state.homepage.headerImage,
  }
}

export default connect(mapStateToProps)(HomeHeaderImage)
