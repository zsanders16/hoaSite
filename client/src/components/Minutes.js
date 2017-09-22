import React from 'react'
import { connect } from 'react-redux'
import { Table, Header } from 'semantic-ui-react'
import SingleMinutes from './SingleMinutes'


class Minutes extends React.Component{

    getMinutesRows = () => {
        return this.props.minutes.map( (minute, i) => {
            return <SingleMinutes key={i} minutes={minute} />
        })
    }


    render(){
        if(this.props.minutes.length>0){
            return(
                <Table definition>
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
            )
        }else{
            return(
                <Header as='h2'>
                    There are no Minutes to display.
                </Header>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { minutes: state.minutes }
}

export default connect(mapStateToProps)(Minutes)