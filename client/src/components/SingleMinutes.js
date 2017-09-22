import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { deleteMinute, displayMinute } from '../actions/minutes'
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


    render(){
        let { minutes, user } = this.props
        return(
            <Table.Row>
                <Table.Cell>{minutes.name}</Table.Cell>
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