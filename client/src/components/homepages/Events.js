import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Divider } from 'semantic-ui-react'

// Actions
import { activeEvents } from '../../actions/events'

class Events extends Component {

  componentDidMount = () => {
    const { dispatch, events } = this.props
    if( events.length <= 0 ) {
      dispatch(activeEvents())
    }
  }

  displayEvents = () => {
    const { events } = this.props
    if( events.length > 0 ) {
      return events.map( event => {
        return (
          <Segment basic>
            <Header as='h4'>{ event.title }</Header>
            <span>{ event.date }</span>
            <Divider />
            <p>{ event.description }</p>
          </Segment>
        )
      })
    }
  }

  render() {
    return (
      <Segment basic>
        { this.displayEvents() }
      </Segment>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    events: state.events.active,
  }
}

export default connect(mapStateToProps)(Events)
