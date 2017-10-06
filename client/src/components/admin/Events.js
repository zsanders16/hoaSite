import React from 'react'
import { Segment, Divider, Header, Table, Grid, Button, Form, Popup, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {
  getEvents,
  addEvent,
  updateEvent,
  removeEvent,
  clearEvents,
} from '../../actions/events'
import moment from 'moment'
import Paginator from '../Paginator'
import EventModal from './EventModal'

class Events extends React.Component{
    defaults = {
      hasMore: false, eventForm: false, edit: false, eventId: '',
      title: '', date: '', description: '', id: '', active: '',
    }
    state = { ...this.defaults }

    componentDidMount(){
        let { dispatch, events } = this.props
        if( events.length <= 0 ) {
          dispatch(getEvents())
          this.setState({ hasMore: true })
        }
    }
    componentWillUnmount = () => {
      const { dispatch } = this.props
      dispatch(clearEvents())
    }

    editEvent = (event) => {
        let { eventForm } = this.state
        this.setState({ id: event.id, title: event.title, date: event.date, description: event.description, eventForm: !eventForm, edit: true })
    }

    deleteEvent = (event) => {
        let { dispatch } = this.props
        dispatch(removeEvent(event))
        this.closeEventModal()
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

    displayEventModal = ( eventId ) => this.setState({ eventId })
    closeEventModal = () => this.setState({ eventId: '' })

    displayEachEvent = () => {
        let { events } = this.props
        events.sort(this.compare)
        return events.map( (event, i) => {
            return(
                <Table.Row
                  key={i}
                  onClick={()=>this.displayEventModal(event.id)}>
                    <Table.Cell>
                        <Header as='h4'>{event.title.substr(0,30) + '...'}</Header>
                    </Table.Cell>
                    <Table.Cell singleLine>
                        {moment(event.date).format("MMM Do YYYY")}
                    </Table.Cell>
                    <Table.Cell>
                        {event.description.substr(0,50) + '...'}
                    </Table.Cell>
                    <Table.Cell>
                      { event.active ? 'Active' : 'Inactive' }
                    </Table.Cell>
                    <Table.Cell>
                      <Segment basic clearing>
                        <Popup
                          trigger={
                            <Button
                              color='twitter'
                              size='mini'
                              onClick={() => this.editEvent(event)}
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
                      </Segment>
                    </Table.Cell>
                </Table.Row>
            )
        })
    }

    events = () => {
        let { events } = this.props
        return(
            <Segment basic>
                <Header textAlign='center' as='h2'>Upcoming Events</Header>
                <Divider />
                { events.length>0 ? this.displayEvents() : this.displayNoEvents()}
                <Grid>
                    <Grid.Column width={12}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button primary onClick={ this.showEventForm } >Create Event</Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }

    loadMore = ( page ) => {
      const { dispatch, pagination } = this.props
      const { hasMore } = this.state
      if( hasMore && pagination.total_pages ) {
        if( page <= pagination.total_pages ) {
          dispatch(getEvents(page))
        } else {
          this.setState({ hasMore: false })
        }
      }
    }

    displayEvents = () => {
      const { eventId } = this.state
        return(
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
                    <Table.Footer>
                      <Table.Row>
                        <Table.HeaderCell colSpan={5}>
                          { eventId &&
                            <EventModal
                              eventId={eventId}
                              closeEventModal={this.closeEventModal} />
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

    displayNoEvents = () => {
        return (
            <Segment basic>
                <Header textAlign='center' as='h2'>There are no events to display.</Header>
                <p>Click the Creat Event Button to add an event.</p>
            </Segment>
        )
    }

    showEventForm = () => {
        let { eventForm } = this.state
        this.setState({ eventForm: !eventForm})
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
        this.setState({ title: '', data: '', description: '', eventForm: false, edit: false, eventId: '' })
    }

    handleStatusChange = ( event, data ) => {
      this.setState({ [data.id]: data.value })
    }

    displayForm = () => {
        let { title, date, description, active, edit } = this.state
        return(
            <Segment basic >
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Form onSubmit={this.handleOnSubmit} >
                        <Form.Field>
                            <label>Title</label>
                            <input placeholder='Title' value={title} id='title' onChange={this.handleOnChange} />
                        </Form.Field>
                        <Form.Field>
                            <label >Meeting Date : </label><input value={date} type="date" id='date' onChange={this.handleOnChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.TextArea label='Description' placeholder='Description of the event...' value={description} id='description' onChange={this.handleOnChange} />
                        </Form.Field>
                        <Form.Field>
                          <label>Status</label>
                          <Form.Select
                            options={[
                              { key: 'active', text: 'Active', value: true },
                              { key: 'inactive', text: 'Inactive', value: false },
                            ]}
                            value={active}
                            id='active'
                            onChange={this.handleStatusChange} />
                        </Form.Field>
                        <Button primary onClick={this.showEventForm} >Cancel</Button>
                        <Button primary type='submit'>{ edit ? 'Update' : 'Submit' }</Button>
                    </Form>
                </Grid.Column>
            </Segment>
        )
    }

    render(){
        let { eventForm } = this.state
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
                    { eventForm ? this.displayForm() : this.events() }
                </Segment>
            </Segment>
        )

    }
}

const mapStateToProps = (state) => {
    return {
      events: state.events.data,
      pagination: state.events.pagination,
    }
}

export default connect(mapStateToProps)(Events)
