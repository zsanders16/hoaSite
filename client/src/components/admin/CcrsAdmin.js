import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Button, Sidebar, Menu, Divider, Form, Confirm, Grid, Table, Message } from 'semantic-ui-react'
import { updateCcrModule } from '../../actions/admin/adminModules'
import { addCcr } from '../../actions/ccrs'
import { addBylaw } from '../../actions/bylaws'
import FileBase64 from 'react-file-base64'
import SingleCcr from '../SingleCcr'
import SingleBylaw from '../SingleBylaw'


class CcrsAdmin extends React.Component{
    state = { active: false, security: 'admin', visible: false, showOpen: false, showHO: false, showAdmin: false, showActive: false, module: {}, formccr: false, formbylaw: false }

    componentDidMount(){
        this.props.adminModules.forEach( module =>{
            if(module.name === 'ccr'){
                this.setState( { active: module.active, security: module.security, module: module } )
            }
        })

    }

    changeActiveStatus = () => {
        let { active, module } = this.state
        this.setState( { active: !active, showActive: false } )
        let ccrAdmin = module
        ccrAdmin.active = !active
        this.setState({ module: ccrAdmin })
        this.props.dispatch(updateCcrModule(ccrAdmin))
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
        let ccrAdmin = this.state.module
        ccrAdmin.security = 'open'
        this.setState({ module: ccrAdmin })
        this.props.dispatch(updateCcrModule(ccrAdmin))
    }
    changeSecurityHO = () => {
        this.setState({ security: 'ho', showHO: false })
        let ccrAdmin = this.state.module
        ccrAdmin.security = 'ho'
        this.setState({ module: ccrAdmin })
        this.props.dispatch(updateCcrModule(ccrAdmin))
    }
    changeSecurityAdmin = () => {
        this.setState({ security: 'admin', showAdmin: false })
        let ccrAdmin = this.state.module
        ccrAdmin.security = 'admin'
        this.setState({ module: ccrAdmin })
        this.props.dispatch(updateCcrModule(ccrAdmin))
    }

    showOpen = () => this.setState({ showOpen: true })
    showHO = () => this.setState({ showHO: true })
    showAdmin = () => this.setState({ showAdmin: true })
    showActive = () => this.setState({ showActive: true })

    handleCancelOpen = () => this.setState({ showOpen: false })
    handleCancelHO = () => this.setState({ showHO: false })
    handleCancelAdmin = () => this.setState({ showAdmin: false })
    handleCancelActive = () => this.setState({ showActive: false })

    displayNoCcrs = () => {
        return(
            <Message>
                <Message.Header>
                    No CCRs to display.
                </Message.Header>
                <p>
                    Please Select the Add CCRs button to add a CCR.
                </p>
            </Message>
        )
    }

    displayNoBylaws = () => {
        return(
            <Message>
                <Message.Header>
                    No Bylaws to display.
                </Message.Header>
                <p>
                    Please Select the Add Bylaws button to add a Bylaw.
                </p>
            </Message>
        )
    }

    getCcrRows = () => {
        return this.props.ccrs.map( (ccr, i) => {
            return <SingleCcr key={i} ccr={ccr} />
        })
    }

    getBylawsRows = () => {
        return this.props.bylaws.map( (bylaw, i) => {
            return <SingleBylaw key={i} bylaw={bylaw} />
        })
    }

    displayccrTable = () => {
        return(
            <Table definition>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {this.getCcrRows()}
                </Table.Body>
            </Table>
        )
    }

    displaybylawTable = () => {
        return(
            <Table definition>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {this.getBylawsRows()}
                </Table.Body>
            </Table>
        )
    }

    selectccrFile = (file) => {
        let { dispatch } = this.props
        let ccr = { name: file[0].name, attachment: file[0].base64 }
        dispatch(addCcr(ccr))
        this.setState({ formccr: false })
    }

    selectbylawFile = (file) => {
        let { dispatch } = this.props
        let bylaw = { name: file[0].name, attachment: file[0].base64 }
        dispatch(addBylaw(bylaw))
        this.setState({ formbylaw: false })
    }

    displayccrForm = () => {
        return(
            <Segment basic>
                <Header as='h3'>Please select the file you want to upload.</Header>
                <FileBase64 multiple={ true } onDone={ this.selectccrFile } />
            </Segment>

        )
    }

    displaybylawForm = () => {
        return(
            <Segment basic>
                <Header as='h3'>Please select the file you want to upload.</Header>
                <FileBase64 multiple={ true } onDone={ this.selectbylawFile } />
            </Segment>

        )
    }

    displayCcrs = () => {
        let { ccrs } = this.props
        let { formccr } = this.state
        if(formccr){
            return this.displayccrForm()
        }else{
            if(ccrs.length > 0){
                return this.displayccrTable()
            }else{
                return this.displayNoCcrs()
            }
        }
    }

    displayByLaws = () => {
        let { bylaws } = this.props
        let { formbylaw } = this.state
        if(formbylaw){
            return this.displaybylawForm()
        }else{
            if(bylaws.length > 0){
                return this.displaybylawTable()
            }else{
                return this.displayNoBylaws()
            }
        }
    }

    notActive = () => {
        return(
            <Message style={{height: '150px'}}>
                <Message.Header>
                    The CCRs | ByLaws Module is Inactive
                </Message.Header>
                <p>
                    Select the CCRs | ByLaws Settings Button to Activate this module.
                </p>
            </Message>
        )
    }

    clickShowccrForm = () => {
        this.setState({ formccr: true })
    }

    clickShowbylawForm = () => {
        this.setState({ formbylaw: true })
    }

    render(){
        const { active, visible } = this.state
        let correctWords = active ? 'Click to Deactivate' : 'Click to Activate'
        let correctWord = active ? 'Active' : 'Inactive'
        let correctPhrase = `Are you sure you want to ${correctWords} the CCRs|ByLaws Module?`
        return(
            <Segment raised  >
                <Segment basic >
                    <Grid>
                        <Grid.Column width={13} >
                            <Header as='h1' textAlign='center' >CCRs|ByLaws Administration</Header>
                        </Grid.Column >
                        <Grid.Column width={3} >
                            <Button color='blue' onClick={this.toggleVisibility} >CCRs|ByLaws Settings</Button>
                        </Grid.Column >
                    </Grid>
                    <Sidebar.Pushable as={Segment}>
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
                                        Currently CCRs|ByLaws is: {correctWord}
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
                            { active ? 
                            <Segment>
                                <Segment raised>
                                    <Header as='h1' textAlign='center' >CCRs</Header>
                                    { active ? this.displayCcrs() : undefined }
                                    <Grid>
                                        <Grid.Column width={13} >
                                        </Grid.Column >
                                        <Grid.Column width={3} >
                                            { active ? <Button color='blue' onClick={this.clickShowccrForm}>Add CCR</Button> : undefined }
                                        </Grid.Column >
                                    </Grid>
                                </Segment>
                                <Segment raised>
                                    <Header as='h1' textAlign='center' >ByLaws</Header>
                                    { active ? this.displayByLaws() : undefined }
                                    <Grid>
                                        <Grid.Column width={13} >
                                        </Grid.Column >
                                        <Grid.Column width={3} >
                                            { active ? <Button color='blue' onClick={this.clickShowbylawForm}>Add ByLaw</Button> : undefined }
                                        </Grid.Column >
                                    </Grid>
                                </Segment>
                            </Segment> : this.notActive()
                            }
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Segment>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules, ccrs: state.ccrs, bylaws: state.bylaws }
}


export default connect(mapStateToProps)(CcrsAdmin);