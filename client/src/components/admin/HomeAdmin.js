import React from 'react'
import { Segment, Divider, Header, Table, Grid, Button, Form, Popup, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getEvents, addEvent, updateEvent, removeEvent } from '../../actions/events'

class HomeAdmin extends React.Component{
    state = { eventForm: false, edit: false, title: '', date: '', description: '', id: '' }

    componentDidMount(){
        let { dispatch } = this.props
        dispatch(getEvents())
    }

    editEvent = (event) => {
        let { eventForm } = this.state
        this.setState({ id: event.id, title: event.title, date: event.date, description: event.description, eventForm: !eventForm, edit: true })
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

    displayEachEvent = () => {
        let { events } = this.props
        events.sort(this.compare)
        return events.map( (event, i) => {
            return(
                <Table.Row key={i}>
                    <Table.Cell>
                        <Header as='h4'>{event.title}</Header>
                    </Table.Cell>
                    <Table.Cell singleLine>
                        {event.date}
                    </Table.Cell>
                    <Table.Cell>
                        {event.description}
                    </Table.Cell>
                    <Table.Cell>
                        <Popup
                                trigger={<Button color='twitter' size='mini' onClick={() => this.editEvent(event)} ><Icon name='sticky note outline' /></Button>}
                                content='Edit Event'
                                hideOnScroll
                            />
                            <Popup
                                trigger={<Button color='google plus' size='mini' onClick={ () => this.deleteEvent(event)} ><Icon name='remove' /></Button>}
                                content='Delete Event'
                                hideOnScroll
                            />
                    </Table.Cell>
                </Table.Row>
            )
        })
    }


    
    events = () => {
        let { events } = this.props
        return(
            <Segment>
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

    displayEvents = () => {
        return(
            <Segment basic>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine textAlign='center' >Event Title</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' >Event Date</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' >Event Description</Table.HeaderCell>
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
        let { title, date, description, edit, id } = this.state
        let newEvent = { title, date, description, id }
        if(edit){
            dispatch(updateEvent(newEvent))
        }else{
            dispatch(addEvent(newEvent))
        }
        this.setState({ title: '', data: '', description: '', eventForm: false, edit: false })
    }


    displayForm = () => {
        let { title, date, description, edit } = this.state
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
            <Segment raised>
                <Header textAlign='center' as='h2'>Home Page Administration</Header>
                <Segment>
                    { eventForm ? this.displayForm() : this.events() }
                </Segment>
            </Segment>
        )
         
    }
}

const mapStateToProps = (state) => {
    return { events: state.events }
}

export default connect(mapStateToProps)(HomeAdmin)