import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Button, Sidebar, Menu, Divider, Form, Confirm, Grid, Table, Message } from 'semantic-ui-react'
import { updateMinutesModule } from '../../actions/admin/adminModules'
import { addMinute } from '../../actions/minutes'
import FileBase64 from 'react-file-base64'
import SingleMinutes from '../SingleMinutes'


class MinutesAdmin extends React.Component{
    state = { active: false, 
                security: 'admin', 
                visible: false, 
                showOpen: false, 
                showHO: false, 
                showAdmin: false, 
                showActive: false, 
                module: {}, 
                form: false }

    componentDidMount(){
        this.props.adminModules.forEach( module =>{
            if(module.name === 'minutes'){
                this.setState( { active: module.active, security: module.security, module: module } )
            }
        })

    }

    changeActiveStatus = () => {
        let { active, module } = this.state
        this.setState( { active: !active, showActive: false } )
        let minutesAdmin = module
        minutesAdmin.active = !active
        this.setState({ module: minutesAdmin })
        this.props.dispatch(updateMinutesModule(minutesAdmin))
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    displayLevelOfSecurity = () => {
        let { security } = this.state
        if(security === 'admin'){
            return 'Admin'
        }else if(security === 'ho'){
            return  'Protected'
        }else{
            return 'Public'
        }
    }

    changeSecurityOpen = () => {
        this.setState({ security: 'open', showOpen: false })
        let minutesAdmin = this.state.module
        minutesAdmin.security = 'open'
        this.setState({ module: minutesAdmin })
        this.props.dispatch(updateMinutesModule(minutesAdmin))
    }
    changeSecurityHO = () => {
        this.setState({ security: 'ho', showHO: false })
        let minutesAdmin = this.state.module
        minutesAdmin.security = 'ho'
        this.setState({ module: minutesAdmin })
        this.props.dispatch(updateMinutesModule(minutesAdmin))
    }
    changeSecurityAdmin = () => {
        this.setState({ security: 'admin', showAdmin: false })
        let minutesAdmin = this.state.module
        minutesAdmin.security = 'admin'
        this.setState({ module: minutesAdmin })
        this.props.dispatch(updateMinutesModule(minutesAdmin))
    }

    showOpen = () => this.setState({ showOpen: true })
    showHO = () => this.setState({ showHO: true })
    showAdmin = () => this.setState({ showAdmin: true })
    showActive = () => this.setState({ showActive: true })

    handleCancelOpen = () => this.setState({ showOpen: false })
    handleCancelHO = () => this.setState({ showHO: false })
    handleCancelAdmin = () => this.setState({ showAdmin: false })
    handleCancelActive = () => this.setState({ showActive: false })

    displayNoMinutes = () => {
        return(
            <Message>
                <Message.Header>
                    No Meeting Minutes to display.
                </Message.Header>
                <p>
                    Please Select the Add Minutes button to add a Meeting Minutes.
                </p>
            </Message>
        )
    }

    getMinutesRows = () => {
        return this.props.minutes.map( (minute, i) => {
            return <SingleMinutes key={i} minutes={minute} />
        })
    }

    displayTable = () => {
        return(
            <Table celled >
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {this.getMinutesRows()}
                </Table.Body>
            </Table>
        )
    }

    selectFile = (file) => {
        let { dispatch } = this.props
        let minutes= { name: file[0].name, attachment: file[0].base64 }
        dispatch(addMinute(minutes))
        this.setState({ form: false })

    }

    displayForm = () => {
        return(
            <Segment basic>
                <Header as='h3'>Please select the file you want to upload.</Header>
                <FileBase64 multiple={ true } onDone={ this.selectFile } />
            </Segment>

        )
    }

    displayMinutes = () => {
        let { minutes } = this.props
        let { form } = this.state
        if(form){
            return this.displayForm()
        }else{
            if(minutes.length > 0){
                return this.displayTable()
            }else{
                return this.displayNoMinutes()
            }
        }
    }

    notActive = () => {
        return(
            <Message>
                <Message.Header>
                    The Minutes Module is Inactive
                </Message.Header>
                <p>
                    Select the Minutes Settings Button to Activate this module.
                </p>
            </Message>
        )
    }

    clickShowForm = () => {
        this.setState({ form: true })
    }

    render(){
        const { active, visible } = this.state
        let correctWords = active ? 'Click to Deactivate' : 'Click to Activate'
        let correctWord = active ? 'Active' : 'Inactive'
        let correctPhrase = `Are you sure you want to ${correctWords} the Minutes Module?`
        return(
            <Segment raised  >
                <div  >
                    <Grid>
                        <Grid.Column width={13} >
                        </Grid.Column >
                        <Grid.Column width={3} >
                            <Button color='blue' onClick={this.toggleVisibility} >Minutes Settings</Button>
                        </Grid.Column >
                    </Grid>
                    <Sidebar.Pushable as={Segment} style={{minHeight: '300px', height: 'auto'}}>
                        <Sidebar
                            as={Menu}
                            animation='scale down'
                            width='wide'
                            direction='right'
                            visible={visible}
                            icon='labeled'
                            vertical
                            inverted
                        >
                            <Menu.Item name='home'>
                                <Header color='grey'>
                                    <Header.Content>
                                        Currently Minutes is: {correctWord}
                                    </Header.Content>
                                </Header>
                                <Button inverted color='blue' onClick={this.showActive}>{ correctWords }</Button>
                                <Confirm
                                    open={this.state.showActive}
                                    content={correctPhrase}
                                    cancelButton='No'
                                    confirmButton='Yes'
                                    onCancel={this.handleCancelActive}
                                    onConfirm={this.changeActiveStatus}
                                />
                                {active ? 
                                <div>
                                    <Divider />
                                    <Header color='grey'>
                                        <Header.Content>
                                            Security Level
                                        </Header.Content>
                                    </Header>
                                    <Form>
                                        <Form.Field>
                                            <Header as='h2' color='grey' >Current value: <b>{this.displayLevelOfSecurity()}</b></Header>
                                        </Form.Field>
                                    </Form>
                                    <Button.Group>
                                        <Button inverted color='blue' onClick={this.showOpen}>Public</Button>
                                        <Confirm
                                            open={this.state.showOpen}
                                            content='Are you sure you want to set security to Public?'
                                            cancelButton='No'
                                            confirmButton='Yes'
                                            onCancel={this.handleCancelOpen}
                                            onConfirm={this.changeSecurityOpen}
                                        />
                                        <Button.Or />
                                        <Button inverted color='blue' onClick={this.showHO}>Protected</Button>
                                        <Confirm
                                            open={this.state.showHO}
                                            content='Are you sure you want to set security to Protected?'
                                            cancelButton='No'
                                            confirmButton='Yes'
                                            onCancel={this.handleCancelHO}
                                            onConfirm={this.changeSecurityHO}
                                        />
                                        <Button.Or />
                                        <Button inverted color='blue' onClick={this.showAdmin}>Admin</Button>
                                        <Confirm
                                            open={this.state.showAdmin}
                                            content='Are you sure you want to set security to Admin?'
                                            cancelButton='No'
                                            confirmButton='Yes'
                                            onCancel={this.handleCancelAdmin}
                                            onConfirm={this.changeSecurityAdmin}
                                        />
                                    </Button.Group>
                                </div> : undefined
                                }
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Header as='h1' textAlign='center' >Minutes Administration</Header>
                                { active ? this.displayMinutes() : this.notActive() }
                                <Grid>
                                    <Grid.Column width={13} >
                                    </Grid.Column >
                                    <Grid.Column width={3} >
                                        { active ? <Button color='blue' onClick={this.clickShowForm}>Add Minutes</Button> : undefined }
                                    </Grid.Column >
                                </Grid>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules, minutes: state.minutes }
}


export default connect(mapStateToProps)(MinutesAdmin);