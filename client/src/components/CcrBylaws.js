import React from 'react'
import { connect } from 'react-redux'
import SingleCcr from './SingleCcr'
import SingleBylaw from './SingleBylaw'
import { Segment, Header, Grid, Table, Message } from 'semantic-ui-react'

class CcrBylaws extends React.Component{

    displayNoCcrs = () => {
        return(
            <Message>
                <Message.Header>
                    No CCRs to display.
                </Message.Header>
            </Message>
        )
    }

    displayNoBylaws = () => {
        return(
            <Message>
                <Message.Header>
                    No Bylaws to display.
                </Message.Header>
            </Message>
        )
    }

    displayccrTable = () => {
        return(
            <Table definition>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {this.getCcrRows()}
                </Table.Body>
            </Table>
        )
    }

    displaybylawTable = () => {
        return(
            <Table definition>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {this.getBylawsRows()}
                </Table.Body>
            </Table>
        )
    }

    getCcrRows = () => {
        return this.props.ccrs.map( (ccr, i) => {
            return <SingleCcr key={i} ccr={ccr} />
        })
    }

    getBylawsRows = () => {
        return this.props.bylaws.map( (bylaw, i) => {
            return <SingleBylaw key={i} bylaw={bylaw} />
        })
    }

    displayCcrs = () => {
        let { ccrs } = this.props
        if(ccrs.length > 0){
            return this.displayccrTable()
        }else{
            return this.displayNoCcrs()
        }
    }

    displayByLaws = () => {
        let { bylaws } = this.props
        if(bylaws.length > 0){
            return this.displaybylawTable()
        }else{
            return this.displayNoBylaws()
        }
    }

    render(){
        return(
            <Segment>
                <Segment raised>
                    <Header as='h1' textAlign='center' >CCRs</Header>
                    { this.displayCcrs() }
                    <Grid>
                        <Grid.Column width={13} >
                        </Grid.Column >
                        
                    </Grid>
                </Segment>
                <Segment raised>
                    <Header as='h1' textAlign='center' >ByLaws</Header>
                    { this.displayByLaws() }
                    <Grid>
                        <Grid.Column width={13} >
                        </Grid.Column >
                    </Grid>
                </Segment>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { ccrs: state.ccrs, bylaws: state.bylaws }
}

export default connect(mapStateToProps)(CcrBylaws);