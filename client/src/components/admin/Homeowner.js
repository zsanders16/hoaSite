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

    handleStatusToggle = ( userId, status ) => {
      const { dispatch, homeowner, redisplayHomeowners } = this.props
      dispatch(statusHomeowners(userId,status))
      this.setState({ status: homeowner.status })
    }


    render(){
        let { homeowner } = this.props
        let { admin, status } = this.state
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
                  <Button
                    toggle
                    active={status === 'true'}
                    onClick={()=>this.handleStatusToggle(homeowner.id, homeowner.status)}>
                    { status === 'true' ? 'Active' : 'Inactive' }
                  </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(Homeowner);
