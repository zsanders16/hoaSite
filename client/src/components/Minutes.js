import React from 'react'
import { connect } from 'react-redux'
import { Table, Header, Segment } from 'semantic-ui-react'
import SingleMinutes from './SingleMinutes'


class Minutes extends React.Component{

    getMinutesRows = () => {
        return this.props.minutes.map( (minute, i) => {
            return <SingleMinutes key={i} minutes={minute} fromAdmin={false}/>
        })
    }


    render(){
        if(this.props.minutes.length>0){
            return(
                <Segment style={{margin: '20px'}}>
                    <Header textAlign='center' as='h1'>Meeting Minutes</Header>
                    <Table celled >
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                    
                        <Table.Body>
                            {this.getMinutesRows()}
                        </Table.Body>
                    </Table>
                </Segment>
            )
        }else{
            return(
                <Segment style={{marginLeft: '50px', marginRight: '50px'}}>
                    <Header as='h2' textAlign='center' style={{margin: '50px'}}>
                        The HOA has no Metting Minutes to display.
                    </Header>
                </Segment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { minutes: state.minutes, user: state.user }
}

export default connect(mapStateToProps)(Minutes)