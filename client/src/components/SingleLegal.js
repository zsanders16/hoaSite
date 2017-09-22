import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { deleteLegal, displayLegal } from '../actions/legal'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class SingleLegal extends React.Component {

    handleDelete = () => {
        let { legal, dispatch } = this.props
        dispatch(deleteLegal(legal))
    }

    handleView = () => {
        let { legal, dispatch } = this.props
        dispatch(displayLegal(legal))
    }


    render(){
        let { legal, user } = this.props
        return(
            <Table.Row>
                <Table.Cell>{legal.name}</Table.Cell>
                <Table.Cell collapsing >
                    <Link to='/viewpdf'><Button color='blue' onClick={this.handleView} >View</Button></Link>
                    { user.admin ? <Button color='blue' onClick={this.handleDelete}>Delete</Button> : undefined }
                </Table.Cell>
            </Table.Row>
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(SingleLegal)