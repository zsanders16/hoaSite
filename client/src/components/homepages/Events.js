import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Divider } from 'semantic-ui-react'
import moment from 'moment'

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
          <Segment raised key={event.id}>
            <Header as='h4'>{ event.title }</Header>
            <span>{ moment(event.date).format('MMMM Do YYYY') }</span>
            <Divider />
            <p>{ event.description }</p>
          </Segment>
        )
      })
    }else{
      return (
        <Segment raised>
          <Header as='h4'>
            There are no Upcoming Events
          </Header>
        </Segment>
      )
    }
  }

  render() {
    return (
      <Segment basic style={{maxHeight: '500px', overflowY: 'scroll'}}>
        <Header as='h3' textAlign='center'>Upcoming Events</Header>
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
