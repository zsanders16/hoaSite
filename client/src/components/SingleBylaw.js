import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { deleteBylaw, displayBylaw } from '../actions/bylaws'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class SingleBylaw extends React.Component {

    handleDelete = () => {
        let { bylaw, dispatch } = this.props
        dispatch(deleteBylaw(bylaw))
    }

    handleView = () => {
        let { bylaw, dispatch } = this.props
        dispatch(displayBylaw(bylaw))
    }


    render(){
        let { bylaw } = this.props
        return(
            <Table.Row>
                <Table.Cell>{bylaw.name}</Table.Cell>
                <Table.Cell collapsing >
                    <Link to='/viewpdf'><Button color='blue' onClick={this.handleView} >View</Button></Link>
                    <Button color='blue' onClick={this.handleDelete}>Delete</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(SingleBylaw)