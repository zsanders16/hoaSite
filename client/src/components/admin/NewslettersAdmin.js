import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Button, Sidebar, Menu, Divider, Form, Confirm, Grid } from 'semantic-ui-react'
import { updateNewsletters } from '../../actions/admin/adminModules'

class NewslettersAdmin extends React.Component{
    state = { active: false, security: 'admin', visible: false, showOpen: false, showHO: false, showAdmin: false, showActive: false, module: {} }

    componentDidMount(){
        this.props.adminModules.forEach( module =>{
            if(module.name === 'newsletter'){
                this.setState( { active: module.active, security: module.security, module: module } )
            }
        })
    }

    changeActiveStatus = () => {
        let { active, module } = this.state
        this.setState( { active: !active, showActive: false } )
        let newsletterAdmin = module
        newsletterAdmin.active = !active
        this.setState({ module: newsletterAdmin })
        this.props.dispatch(updateNewsletters(newsletterAdmin))
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
        let newsletterAdmin = this.state.module
        newsletterAdmin.security = 'open'
        this.setState({ module: newsletterAdmin })
        this.props.dispatch(updateNewsletters(newsletterAdmin))
    }
    changeSecurityHO = () => {
        this.setState({ security: 'ho', showHO: false })
        let newsletterAdmin = this.state.module
        newsletterAdmin.security = 'ho'
        this.setState({ module: newsletterAdmin })
        this.props.dispatch(updateNewsletters(newsletterAdmin))
    }
    changeSecurityAdmin = () => {
        this.setState({ security: 'admin', showAdmin: false })
        let newsletterAdmin = this.state.module
        newsletterAdmin.security = 'admin'
        this.setState({ module: newsletterAdmin })
        this.props.dispatch(updateNewsletters(newsletterAdmin))
    }

    showOpen = () => this.setState({ showOpen: true })
    showHO = () => this.setState({ showHO: true })
    showAdmin = () => this.setState({ showAdmin: true })
    showActive = () => this.setState({ showActive: true })

    handleCancelOpen = () => this.setState({ showOpen: false })
    handleCancelHO = () => this.setState({ showHO: false })
    handleCancelAdmin = () => this.setState({ showAdmin: false })
    handleCancelActive = () => this.setState({ showActive: false })

    render(){
        const { active, visible } = this.state
        let correctWords = active ? 'Click to Deactivate' : 'Click to Activate'
        let correctWord = active ? 'Active' : 'Inactive'
        let correctPhrase = `Are you sure you want to ${correctWords} the Newsletter Module?`
        return(
            <Segment raised  >

                <div style={{height: '300px'}} >
                    <Grid>
                        <Grid.Column width={13} >
                        </Grid.Column >
                        <Grid.Column width={3} >
                            <Button color='blue' onClick={this.toggleVisibility} >Newsletters Settings</Button>
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
                                    Currently Newsletters is: {correctWord}
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
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                        <Header as='h1' textAlign='center' >Newsletter Administration</Header>
                        </Segment>
                    </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules }
}


export default connect(mapStateToProps)(NewslettersAdmin);