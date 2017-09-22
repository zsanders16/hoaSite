import React from 'react'
import { connect } from 'react-redux'
import { Table, Header } from 'semantic-ui-react'
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
                <Table definition>
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