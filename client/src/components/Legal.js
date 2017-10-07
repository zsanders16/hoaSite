import React from 'react'
import { connect } from 'react-redux'
import { Table, Header, Segment } from 'semantic-ui-react'
import SingleLegal from './SingleLegal'


class Legal extends React.Component{

    geLegalRows = () => {
        return this.props.legal.map( (leg, i) => {
            return <SingleLegal key={i} legal={leg} />
        })
    }


    render(){
        if(this.props.legal.length>0){
            return(
                <Segment style={{margin: '20px'}}>
                    <Header textAlign='center' as='h1'>Legal Documents</Header>
                    <Table celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                    
                        <Table.Body>
                            {this.geLegalRows()}
                        </Table.Body>
                    </Table>
                </Segment>
            )
        }else{
            return(
                <Header as='h2'>
                    There are no Legal Documents to display.
                </Header>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { legal: state.legal }
}

export default connect(mapStateToProps)(Legal)