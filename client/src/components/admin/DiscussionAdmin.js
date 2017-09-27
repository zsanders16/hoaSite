import React from 'react'
import { connect } from 'react-redux'
import {    Segment, 
            Header, 
            Button, 
            Sidebar, 
            Menu, 
            Divider, 
            Form, 
            Confirm, 
            Grid, 
            Message, 
            Card, 
            TextArea,
            Comment } from 'semantic-ui-react'
import { updateDiscussionModule } from '../../actions/admin/adminModules'
import { addDiscussion } from '../../actions/discussion'
import { Link } from 'react-router-dom'


class DiscussionAdmin extends React.Component{
    state = { active: false, 
                security: 'admin', 
                visible: false, 
                showHO: false, 
                showAdmin: false, 
                showActive: false, 
                module: {}, 
                form: false,
                newTitle: '',
                newDescription: '',
            }

    componentDidMount(){
        this.props.adminModules.forEach( module =>{
            if(module.name === 'discussion'){
                this.setState( { active: module.active, security: module.security, module: module } )
            }
        })
    }

    changeActiveStatus = () => {
        let { active, module } = this.state
        this.setState( { active: !active, showActive: false } )
        let discussionAdmin = module
        discussionAdmin.active = !active
        this.setState({ module: discussionAdmin })
        this.props.dispatch(updateDiscussionModule(discussionAdmin))
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
        let discussionAdmin = this.state.module
        discussionAdmin.security = 'open'
        this.setState({ module: discussionAdmin })
        this.props.dispatch(updateDiscussionModule(discussionAdmin))
    }
    changeSecurityHO = () => {
        this.setState({ security: 'ho', showHO: false })
        let discussionAdmin = this.state.module
        discussionAdmin.security = 'ho'
        this.setState({ module: discussionAdmin })
        this.props.dispatch(updateDiscussionModule(discussionAdmin))
    }
    changeSecurityAdmin = () => {
        this.setState({ security: 'admin', showAdmin: false })
        let discussionAdmin = this.state.module
        discussionAdmin.security = 'admin'
        this.setState({ module: discussionAdmin })
        this.props.dispatch(updateDiscussionModule(discussionAdmin))
    }

    showHO = () => this.setState({ showHO: true })
    showAdmin = () => this.setState({ showAdmin: true })
    showActive = () => this.setState({ showActive: true })

    handleCancelHO = () => this.setState({ showHO: false })
    handleCancelAdmin = () => this.setState({ showAdmin: false })
    handleCancelActive = () => this.setState({ showActive: false })

    displayNoDiscussions = () => {
        return(
            <Message>
                <Message.Header>
                    No Discussions to display.
                </Message.Header>
                <p>
                    Please Select the Start Discussion button to start a discussion tread.
                </p>
            </Message>
        )
    }


    eachComment = () => {
        let { discussion } = this.state
        return discussion.comments.map( (comment, i) => {
            return (
                <Comment>
                    <Comment.Content>
                        <Comment.Author as='a'>comment.user_created</Comment.Author>
                        <Comment.Metadata>
                            <div>comment.created_at</div>
                        </Comment.Metadata>
                        <Comment.Text>comment.content</Comment.Text>
                    </Comment.Content>
                </Comment>
            )
        })
        
    }

    displayAllDiscussions = () => {
        let { discussions } = this.props
        return discussions.map( (discussion, i) => {
            let url = `/viewdiscussion/${discussion.id}`
            return (
                <Link to={{ pathname: url, query: { discussion: discussion } }} key={i}>
                    <Card color='blue'  >
                        <Card.Content>
                            <Card.Header>
                                {discussion.title}
                            </Card.Header>
                            <Card.Description>
                                {discussion.description}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Link> 
            ) 
        })
    }


    createDiscussion = (e) => {
        let { newDescription, newTitle } = this.state
        let { dispatch } = this.props
        e.preventDefault()
        let discussion = {title: newTitle, description: newDescription}
        dispatch(addDiscussion(discussion))
        this.setState({ form: false })
    }

    onChangeForm = (e) => {
        let id = e.target.id
        this.setState({[id]: e.target.value})
    }

    displayForm = () => {
        let { newDescription, newTitle } = this.state
        return(
            <Segment basic>
                <Form onSubmit={this.createDiscussion}>
                    <Form.Field  >
                        <label>Discussion Title</label>
                        <input  placeholder='Title'
                                value={newTitle}
                                id='newTitle'
                                onChange={this.onChangeForm}   
                                />
                    </Form.Field>
                    <Form.Field>
                        <Form.Field control={TextArea} 
                                    value={newDescription} 
                                    id='newDescription'
                                    label='Discussion Description' 
                                    placeholder='Description'
                                    onChange={this.onChangeForm}
                                     />
                    </Form.Field>
                    <Button primary onClick={this.clickShowForm} >Cancel</Button>
                    <Button primary type='submit'>Submit</Button>
                </Form>
            </Segment>
        )
    }

    displayDiscussions = () => {
        let { discussions } = this.props
        let { form, showDiscussion } = this.state
        if(form){
            return (
                <Grid.Column width={10}  >
                    { this.displayForm() }
                </Grid.Column >
            )
        }else if(showDiscussion){

        }else{
            if(discussions.length > 0){
                return (
                    <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}} >
                        { this.displayAllDiscussions() }
                    </Grid.Column >
                )
            }else{
                return (
                    <div>
                        <Grid.Column >
                            {this.displayNoDiscussions()}
                        </Grid.Column>
                    </div>
                )
            }
        }
    }

    notActive = () => {
        return(
            <Message>
                <Message.Header>
                    The Discussion Module is Inactive
                </Message.Header>
                <p>
                    Select the Discussion Settings Button to Activate this module.
                </p>
            </Message>
        )
    }

    clickShowForm = () => {
        let { form } = this.state
        this.setState({ form: !form })
    }

    showStartButton = () => {
        let { active, form } = this.state
        if( active ){
            if(form){
                return undefined
            }else{
                return (
                    <Grid columns={2}>
                        <Grid.Column >
                            <Button color='blue' onClick={this.clickShowForm}>Start Discussion</Button>
                        </Grid.Column>
                        <Grid.Column >
                            <Link to='/admin/discussion/archive'><Button color='blue'>View Archive</Button></Link>
                        </Grid.Column>
                    </Grid>
                )
            }
        }else{
            return undefined
        }
    }

    render(){
        const { active, visible } = this.state
        let correctWords = active ? 'Click to Deactivate' : 'Click to Activate'
        let correctWord = active ? 'Active' : 'Inactive'
        let correctPhrase = `Are you sure you want to ${correctWords} the Discussion Module?`
        return(
            <Segment raised  >
                <div >
                    <Grid>
                        <Grid.Column width={13} >
                        </Grid.Column >
                        <Grid.Column width={3} >
                            <Button color='blue' onClick={this.toggleVisibility} >Discussion Settings</Button>
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
                                        Currently Discussion is: {correctWord}
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
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={12} >
                                            <Header as='h1' textAlign='center' >Discussion Administration</Header>
                                        </Grid.Column >
                                        <Grid.Column width={4} >
                                            { this.showStartButton() }
                                        </Grid.Column >
                                    </Grid.Row>
                                    <Grid.Row columns={3}>
                                        { active ? this.displayDiscussions() : this.notActive() }
                                    </Grid.Row>
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
    return { adminModules: state.adminModules, discussions: state.discussion }
}


export default connect(mapStateToProps)(DiscussionAdmin);