import React from 'react'
import { getEvents, clearEvents } from '../actions/events'
import { connect } from 'react-redux'
import { Header, Segment, Table } from 'semantic-ui-react'

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

class AllEvents extends React.Component{
    state = {   jan: [],
                feb: [],
                mar: [],
                apr: [],
                may: [],
                jun: [],
                jul: [],
                aug: [],
                sep: [],
                oct: [],
                nov: [],
                dec: [],
            }

    componentDidMount(){
        this.props.dispatch(getEvents())
    }

    getFunction = (num) => {
        let { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } = this.state
        let all = {
            '1': jan,
            '2': feb,
            '3': mar,
            '4': apr,
            '5': may,
            '6': jun,
            '7': jul,
            '8': aug,
            '9': sep,
            '10': oct,
            '11': nov,
            '12': dec,
        }

        let month = {
            '1': 'jan',
            '2': 'feb',
            '3': 'mar',
            '4': 'apr',
            '5': 'may',
            '6': 'jun',
            '7': 'jul',
            '8': 'aug',
            '9': 'sep',
            '10': 'oct',
            '11': 'nov',
            '12': 'dec',
        }

        let type = all[num]
        let stateMonth = month[num] 
        debugger
        return (createdEvent) => {
            this.setState({ [`${stateMonth}`]: [...type, createdEvent] }, function(){
                debugger
            })
        }
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.events !== this.props.events){
            

            nextProps.events.forEach( (createdEvent) => {
                let month = createdEvent.date.substring(5,7)
                let { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } = this.state
                debugger
                let call = this.getFunction(month)
                debugger
                call(createdEvent)

                // switch(month){
                //     case '1':
                //         this.setState({ jan: [...jan, event]})
                //         break
                //     case '2':
                //         this.setState({ feb: [...feb, event]})
                //         break
                //     case '3':
                //         this.setState({ mar: [...mar, event]})
                //         break
                //     case '4':
                //         this.setState({ apr: [...apr, event]})
                //         break
                //     case '5':
                //         this.setState({ may: [...may, event]})
                //         break
                //     case '6':
                //         this.setState({ jun: [...jun, event]})
                //         break
                //     case '7':
                //         this.setState({ jul: [...jul, event]})
                //         break
                //     case '8':
                //         this.setState({ aug: [...aug, event]})
                //         break
                //     case '9':
                //         this.setState({ sep: [...sep, event]})
                //         break
                //     case '10':
                //         let existArray = oct
                //         let newArray = [...oct, event]
                //         this.setState({ oct: newArray})
                        
                //         break
                //     case '11':
                //         this.setState({ nov: [...nov, event]})
                //         break
                //     case '12':
                //         this.setState({ dec: [...dec, event]})
                //         break
                //     default:
                //         break
                // }
            })
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

    eachMonth = (month) => {
        if(month.length > 0){
            return month.map( (event, i) => {
                return(
                    <Table.Row key={i}>
                        <Table.Cell collapsing verticalAlign='top' >{event.date}</Table.Cell>
                        <Table.Cell collapsing verticalAlign='top' >{event.title}</Table.Cell>
                        <Table.Cell verticalAlign='top' >{event.description}</Table.Cell>
                    </Table.Row>
                )
            })
        }else{
            return (
                <Table.Row >
                    <Table.Cell >No Events for this Month</Table.Cell>
                </Table.Row>
            )
        }
    }

    displayEvents = () => {
        let { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } = this.state
        
        return (months.map( (month, i) => {

            const all = {
                'January'   : jan,
                'February'  : feb,
                'March'     : mar,
                'April'     : apr,
                "May"       : may,
                "June"      : jun,
                "July"      : jul,
                "August"    : aug,
                "September" : sep,
                "October"   : oct,
                "November"  : nov,
                "December"  : dec,
              }
            const Type = all[month]
            return (
                <Segment key={i} >
                    <Header textAlign='center'>{month}</Header>
                    <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { this.eachMonth(Type)}
                    </Table.Body>
                    </Table>
                </Segment>
            )
        })
        )
    }

    render(){
        let { events } = this.props
        if(events.length > 0){
            return (
                <Segment>
                    {this.displayEvents()}
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