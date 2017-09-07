import React from 'react'
import { Table, Checkbox, Segment, Button, Icon, Popup } from 'semantic-ui-react'
import { removeHomeowner } from '../../actions/homeowners';
import { updateHomeowner } from '../../actions/homeowners'
import { connect } from 'react-redux'

class Homeowner extends React.Component {
    state = {admin: false}

    componentDidMount() {
        let { homeowner } = this.props
        this.setState({admin: homeowner.admin})
    }

    deleteUser = () => {
        let { homeowner } = this.props
        this.props.dispatch(removeHomeowner(homeowner.id))
    }

    handleAdminSwitch = (homeowner) => {
        let updateAdmin = homeowner.admin
        homeowner.admin = updateAdmin
        this.setState({admin: updateAdmin})
        this.props.dispatch(updateHomeowner(homeowner))
    }


    render(){
        let { homeowner } = this.props
        return(
            <Table.Row>
                <Table.Cell collapsing>
                    <Segment basic textAlign='center'>
                        <Popup
                            trigger={<Button color='twitter' size='mini' onClick={() => this.props.editHomeowner({ name: homeowner.name, email: homeowner.email, id: homeowner.id })} ><Icon name='sticky note outline' /></Button>}
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
                <Table.Cell collapsing textAlign='center'><Checkbox checked={homeowner.admin} onChange={() => this.handleAdminSwitch(homeowner)} /></Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(Homeowner);