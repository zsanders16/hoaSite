import React from 'react'
import { Segment, Divider, Header, Table, Grid, Button, Popup, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {
  getEvents,
  addEvent,
  updateEvent,
  removeEvent,
  clearEvents,
} from '../../actions/events'
import EventModal from './EventModal'

class Events extends React.Component{
    defaults = {
        edit: false, eventId: '', showForm: false,
        title: '', date: '', description: '', id: '', active: true,
    }
    state = { ...this.defaults }

    componentDidMount(){
        let { dispatch, events } = this.props
        if( events.length <= 0 ) {
          dispatch(getEvents())
        }
    }
    componentWillUnmount(){
      const { dispatch } = this.props
      dispatch(clearEvents())
    }

    deleteEvent = (event) => {
        let { dispatch } = this.props
        dispatch(removeEvent(event))
    }

    compare (a, b) {
        const eventA = a.date;
        const eventB = b.date;
        let comparison = 0;
        if (eventA > eventB) {
          comparison = 1;
        } else if (eventA < eventB) {
          comparison = -1;
        }
        return comparison;
    }

    displayEventModal = () => this.setState({ showForm: true })


    closeEventModal = () => this.setState({ showForm: false, eventId: '' })

    handleEditButton = (id) => {
        this.setState({ eventId: id }, this.displayEventModal)
    }

    displayEachEvent = () => {
        let { events } = this.props
        events.sort(this.compare)
        return events.map( (event, i) => {
            return(
                <Table.Row
                  key={i}
                  >
                    <Table.Cell>
                        <Header as='h4'>{event.title}</Header>
                    </Table.Cell>
                    <Table.Cell singleLine collapsing >
                        {event.date}
                    </Table.Cell>
                    <Table.Cell>
                        {event.description}
                    </Table.Cell>
                    <Table.Cell>
                      { event.active ? 'Active' : 'Inactive' }
                    </Table.Cell>
                    <Table.Cell collapsing >
                        <Popup
                          trigger={
                            <Button
                              color='twitter'
                              size='mini'
                              onClick={() => this.handleEditButton(event.id)}
                              floated='right'>
                                <Icon name='sticky note outline' />
                            </Button>
                          }
                          content='Edit Event'
                          hideOnScroll
                          />
                        <Popup
                          trigger={
                            <Button
                              color='google plus'
                              size='mini'
                              onClick={() => this.deleteEvent(event)}
                              floated='right'>
                                <Icon name='remove' />
                              </Button>
                            }
                          content='Delete Event'
                          hideOnScroll
                          />
                    </Table.Cell>
                </Table.Row>
            )
        })
    }

    events = () => {
        let { showForm, eventId } = this.state
        let { events } = this.props
        if(showForm){
            return (
                <EventModal
                    eventId={eventId}
                    closeEventModal={this.closeEventModal}
                    showForm={showForm} 
                />
            )
        }else{
            return(
                <Segment basic>
                    <Header textAlign='center' as='h2'>Upcoming Events</Header>
                    <Divider />
                    { events.length>0 ? this.displayEvents() : this.displayNoEvents()}
                    <Grid>
                        <Grid.Column width={12}>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button primary onClick={this.displayEventModal}>Crete Event</Button>
                        </Grid.Column>
                    </Grid>
                </Segment>
            )
        } 
    }


    displayEvents = () => {
    const { eventId } = this.state
        return (
            <Segment basic>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine textAlign='center' >Event Title</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' >Event Date</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' >Event Description</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' >Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { this.displayEachEvent()}
                    </Table.Body>
                </Table>
            </Segment>
        )
    }

    displayNoEvents = () => {
        return (
            <Segment basic>
                <Header textAlign='center' as='h2'>There are no events to display.</Header>
                <p>Click the Creat Event Button to add an event.</p>
            </Segment>
        )
    }


    handleOnChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value });
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        let { dispatch } = this.props
        let { title, date, description, edit, id, active } = this.state
        let newEvent = { title, date, description, id, active }
        if(edit){
            dispatch(updateEvent(newEvent))
        }else{
            dispatch(addEvent(newEvent))
        }
        this.setState({ title: '', data: '', description: '', eventForm: false, edit: false, eventId: '', active: true })
    }

    handleStatusChange = ( event, data ) => {
      this.setState({ [data.id]: data.value })
    }

    handleDateChange = ( moment ) => {
        this.setState({ date: moment.utc().format() })
      }

    render(){
        return(
            <Segment>
                <Header
                  textAlign='center'
                  as='h2'
                  icon>
                  <Icon name='info circle' circular />
                  <Header.Content>
                    Home Page Events Information
                  </Header.Content>
                </Header>
                <Segment basic>
                    { this.events() }
                </Segment>
            </Segment>
        )

    }
}

const mapStateToProps = (state) => {
    return {
      events: state.events.data,
    }
}

export default connect(mapStateToProps)(Events)
