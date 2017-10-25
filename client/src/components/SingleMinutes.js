import React from 'react'
import { Table, Button, Checkbox } from 'semantic-ui-react'
import { deleteMinute, displayMinute, updateMinutes } from '../actions/minutes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class SingleMinutes extends React.Component {

    handleDelete = () => {
        let { minutes, dispatch } = this.props
        dispatch(deleteMinute(minutes))
    }

    handleView = () => {
        let { minutes, dispatch } = this.props
        dispatch(displayMinute(minutes))
    }

    handleUpdate = () => {
        let { minutes, dispatch } = this.props
        let updatedMinute = minutes
        updatedMinute.isAdmin = !minutes.isAdmin
        dispatch(updateMinutes(updatedMinute))
    }


    render(){
        let { minutes, user, fromAdmin } = this.props
        return(
            <Table.Row>
                <Table.Cell>{minutes.name}</Table.Cell>
                { fromAdmin && 
                    <Table.Cell collapsing>
                        <Checkbox checked={minutes.isAdmin} onChange={() => this.handleUpdate()} />
                    </Table.Cell> 
                }
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

export default connect(mapStateToProps)(SingleMinutes)