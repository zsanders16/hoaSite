import React from 'react'
import { Table, Checkbox, Segment, Button, Icon, Popup } from 'semantic-ui-react'
import { removeHomeowner } from '../../actions/homeowners';
import { updateHomeowner, statusHomeowners } from '../../actions/homeowners'
import { connect } from 'react-redux'

class Homeowner extends React.Component {
    state = { admin: false, status: '' }

    componentDidMount() {
        let { homeowner } = this.props
        this.setState({admin: homeowner.admin, status: homeowner.status })
    }

    deleteUser = () => {
        let { homeowner } = this.props
        this.props.dispatch(removeHomeowner(homeowner.id))
    }

    handleAdminSwitch = (homeowner) => {
        let updateAdmin = homeowner.admin
        homeowner.admin = !updateAdmin
        this.setState({admin: !updateAdmin})
        this.props.dispatch(updateHomeowner(homeowner))
    }

    handleStatusToggle = ( ) => {
        const { dispatch, homeowner } = this.props
        let newStatus = !homeowner.status
        dispatch(statusHomeowners(homeowner.id, homeowner.status))
        this.setState({ status: newStatus })
    }

    render(){
        const { homeowner } = this.props
        const { admin, status } = this.state
        return(
            <Table.Row>
                <Table.Cell collapsing>
                    <Segment basic textAlign='center'>
                        <Popup
                            trigger={<Button color='twitter' size='mini' onClick={() => this.props.editHomeowner(homeowner)} ><Icon name='sticky note outline' /></Button>}
                            content='Edit Homeowner'
                            hideOnScroll
                        />
                        <Popup
                            trigger={<Button color='google plus' size='mini' onClick={this.deleteUser} ><Icon name='remove' /></Button>}
                            content='Delete Homeowner'
                            hideOnScroll
                        />
                    </Segment>
                </Table.Cell>
                <Table.Cell collapsing>
                    {homeowner.name}
                </Table.Cell>
                <Table.Cell>
                    {homeowner.email}
                </Table.Cell>
                <Table.Cell collapsing>
                    {homeowner.number}
                </Table.Cell>
                <Table.Cell>
                    {homeowner.address}
                </Table.Cell>
                <Table.Cell collapsing textAlign='center'><Checkbox checked={admin} onChange={() => this.handleAdminSwitch(homeowner)} /></Table.Cell>
                <Table.Cell>
                    { status === false ?
                        <Button primary onClick={this.handleStatusToggle}>Active</Button> :
                        <Button color='red' onClick={this.handleStatusToggle}>Inactive</Button>
                    }
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(Homeowner);
