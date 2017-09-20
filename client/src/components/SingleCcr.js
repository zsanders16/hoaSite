import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { deleteCcr, displayCcr } from '../actions/ccrs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class SingleCcr extends React.Component {

    handleDelete = () => {
        let { ccr, dispatch } = this.props
        dispatch(deleteCcr(ccr))
    }

    handleView = () => {
        let { ccr, dispatch } = this.props
        dispatch(displayCcr(ccr))
    }


    render(){
        let { ccr } = this.props
        return(
            <Table.Row>
                <Table.Cell>{ccr.name}</Table.Cell>
                <Table.Cell collapsing >
                    <Link to='/viewpdf'><Button color='blue' onClick={this.handleView} >View</Button></Link>
                    <Button color='blue' onClick={this.handleDelete}>Delete</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(SingleCcr)