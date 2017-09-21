import React from 'react'
import { connect } from 'react-redux'
import { Table, Header } from 'semantic-ui-react'
import SingleNewsletter from './SingleNewsletter'


class Newsletters extends React.Component{

    getNewsletterRows = () => {
        return this.props.newsletters.map( (newsletter, i) => {
            return <SingleNewsletter key={i} newsletter={newsletter} />
        })
    }


    render(){
        if(this.props.newsletters.length>0){
            return(
                <Table definition>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                
                    <Table.Body>
                        {this.getNewsletterRows()}
                    </Table.Body>
                </Table>
            )
        }else{
            return(
                <Header as='h2'>
                    There are no Newsletters to display.
                </Header>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { newsletters: state.newsletters }
}

export default connect(mapStateToProps)(Newsletters)