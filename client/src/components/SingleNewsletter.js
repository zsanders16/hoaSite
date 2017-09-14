import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { deleteNewsletter, displayNewsletter } from '../actions/newsletters'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class SingleNewletter extends React.Component {

    handleDelete = () => {
        let { newsletter, dispatch } = this.props
        dispatch(deleteNewsletter(newsletter))
    }

    handleView = () => {
        let { newsletter, dispatch } = this.props
        dispatch(displayNewsletter(newsletter))
    }


    render(){
        let { newsletter } = this.props
        return(
            <Table.Row>
                <Table.Cell>{newsletter.name}</Table.Cell>
                <Table.Cell collapsing >
                    <Link to='/viewpdf'><Button color='blue' onClick={this.handleView} >View</Button></Link>
                    <Button color='blue' onClick={this.handleDelete}>Delete</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(SingleNewletter)