import React from 'react'
import { getEvents, clearEvents } from '../actions/events'
import { connect } from 'react-redux'
import { Header, Segment, Table, Icon } from 'semantic-ui-react'

class AllEvents extends React.Component{
    state = { eventList: {}}
    
    componentDidMount(){
        this.props.dispatch(getEvents())
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.events !== this.props.events){

            const eventList = {
                "January": [],
                "February": [],
                "March": [],
                "April": [],
                "May": [],
                "June": [],
                "July": [],
                "August": [],
                "September": [],
                "October": [],
                "November": [],
                "December": [],
            }

            nextProps.events.forEach( (createdEvent) => {
                let month = createdEvent.date.split(' ')[0]
                eventList[month] = [...eventList[month], createdEvent]
            })
            this.setState({ eventList: eventList })
        }
    }

    componentWillUnmount(){
        this.props.dispatch(clearEvents())
    }

    displayNoEvents = () => {
        return(
            <Segment style={{marginLeft: '50px', marginRight: '50px'}}>
                <Header as='h2' textAlign='center' style={{margin: '50px'}}>
                    There are no Upcoming Events to display.
                </Header>
            </Segment>
        )
    }

    eventsByMonth = (events) => {
        return events.map( (event, i) => {
            return(
                <Table.Row key={i}>
                    <Table.Cell width='3' verticalAlign='top' >{event.date}</Table.Cell>
                    <Table.Cell width='5' verticalAlign='top' >{event.title}</Table.Cell>
                    <Table.Cell width='8' verticalAlign='top' >{event.description}</Table.Cell>
                </Table.Row>
            )
        })   
    }

    displayEvents = () => {
        let { eventList } = this.state

        return (Object.keys(eventList).map( (month, i) => {
            return (
                <Segment key={i} >
                    <Header as='h2' textAlign='center' style={{textDecoration: 'underline'}}>{month}</Header>
                    { eventList[month].length > 0 ? 
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width='3'>Date</Table.HeaderCell>
                                <Table.HeaderCell width='5'>Title</Table.HeaderCell>
                                <Table.HeaderCell width='8'>Description</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>          
                            {this.eventsByMonth(eventList[month]) } 
                        </Table.Body>
                    </Table> :
                        <Header textAlign='center'>No Events for this Month</Header>
                    }
                </Segment>
            )
        })
        )
    }

    render(){
        let { events } = this.props
        if(events.length > 0){
            return (
                <Segment style={{margin: '15px 10px 0 10px'}}>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='calendar' circular />
                        <Header.Content style={{textDecoration: 'underline'}}>
                            All Events
                        </Header.Content>
                    </Header>
                    <Segment style={{maxHeight: '950px', overflowY: 'scroll'}}>
                        {this.displayEvents()}
                    </Segment>
                </Segment>
            )
        }else{
            return this.displayNoEvents()
        }  
    }
}

const mapStateToProps = (state) => {
    return {
      events: state.events.data,
    }
}

export default connect(mapStateToProps)(AllEvents)