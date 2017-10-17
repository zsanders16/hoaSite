import React from 'react'
import { Table, Checkbox, Segment, Button, Icon, Popup, Confirm } from 'semantic-ui-react'
import { removeHomeowner } from '../../actions/homeowners';
import { updateHomeowner, statusHomeowners } from '../../actions/homeowners'
import { connect } from 'react-redux'

class Homeowner extends React.Component {
    state = { admin: false, status: '', openActivate: false, openDeactivate: false, openDelete: false}

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
        let newStatus = homeowner.status ? 0 : 1
        dispatch(statusHomeowners(homeowner.id, homeowner.status))
        this.setState({ status: newStatus })
    }

    //confirm for Activating account
    showActivate = () => this.setState({ openActivate: true })
    handleConfirmActivate = () => {
        this.handleStatusToggle()
        this.setState({ openActivate: false })
    }
    handleCancelActivate = () => this.setState({ openActivate: false })

    //confirm for Deactivate account
    showDeactivate = () => this.setState({ openDeactivate: true })
    handleConfirmDeactivate = () => {
        this.handleStatusToggle()
        this.setState({ openDeactivate: false })
    }
    handleCancelDeactivate = () => this.setState({ openDeactivate: false })

    //confirm for Delete account
    showDelete = () => this.setState({ openDelete: true })
    handleConfirmDelete = () => {
        this.deleteUser()
        this.setState({ openDelete: false })
    }
    handleCancelDelete = () => this.setState({ openDelete: false })


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
                            trigger={<Button color='google plus' size='mini' onClick={this.showDelete} ><Icon name='remove' /></Button>}
                            content='Delete Homeowner'
                            hideOnScroll
                        />
                        <Confirm
                            open={this.state.openDelete}
                            header={`Are you sure you want to delete ${homeowner.name}'s account.`}
                            content={'This cannot be undone. You will have to recreate the account if you delete it.'}
                            onCancel={this.handleCancelDelete}
                            onConfirm={this.handleConfirmDelete}
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
                <Table.Cell collapsing >
                    { status === 0 ?
                        <div>
                            <Button primary onClick={this.showDeactivate}>Active</Button>
                            <Confirm
                                open={this.state.openDeactivate}
                                content={`Are you sure you want to deactivate ${homeowner.name}'s account.`}
                                onCancel={this.handleCancelDeactivate}
                                onConfirm={this.handleConfirmDeactivate}
                            />
                        </div>
                        :
                        <div>
                            <Button color='red' onClick={this.showActivate}>Inactive</Button>
                            <Confirm
                                open={this.state.openActivate}
                                header={`Are you sure you want to activate ${homeowner.name}'s account.`}
                                content={'If so, an message will be sent to their email for them to change their password.'}
                                onCancel={this.handleCancelActivate}
                                onConfirm={this.handleConfirmActivate}
                            />
                        </div>
                    }
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(Homeowner);
