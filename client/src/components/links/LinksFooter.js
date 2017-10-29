import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, List, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// Actions
import {
  resetLinks,
  footerLinks,
} from '../../actions/links'

class LinksFooter extends Component {
  state = { reLoad: false }

  componentDidMount = () => {
    const { dispatch, footer } = this.props
    if( !footer || footer.length <= 0 ) {
      dispatch(footerLinks())
      this.setState({ reLoad: true })
    }
  }
  componentWillUnmount = () => {
    this.props.dispatch(resetLinks())
  }

  displayLinks = () => {
    const { footer } = this.props
    if( footer && footer.length > 0 ) {
      return footer.map( (foot, i) => {
        return (
          <List.Item key={i}>
            <List.Icon name='external' size='mini' />
            <List.Content>
              <List.Header>
                <Link
                  to={foot.link}>
                  {foot.title}
                </Link>
              </List.Header>
            </List.Content>
          </List.Item>
        )
      })
    }
  }

  render = () => {
    return (
      <Segment basic>
        <Header as='h4'>External Links</Header>
        <List>
          { this.displayLinks() }
        </List>
      </Segment>
    )
  }

}

const mapStateToProps = ( state, props ) => {
  return {
    footer: state.links.footer,
  }
}

export default connect(mapStateToProps)(LinksFooter)
