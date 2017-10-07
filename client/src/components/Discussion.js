import React from 'react'
import {    Segment, 
    Header, 
    Button, 
    Form, 
    Grid, 
    Message, 
    Card, 
    TextArea,
            } from 'semantic-ui-react'
import { addDiscussion } from '../actions/discussion'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Discussion extends React.Component{
    state = {  
        form: false,
        newTitle: '',
        newDescription: '',
    }

    displayDiscussions = () => {
        let { discussions } = this.props
        let { form } = this.state
        if(form){
            return (
                <Grid.Column width={10}  >
                    { this.displayForm() }
                </Grid.Column >
            )
        }else{
            if(discussions.length > 0){
                return (
                    <Grid columns={3}>  
                        { this.displayAllDiscussions() }
                    </Grid>
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
    
    displayAllDiscussions = () => {
        let { discussions } = this.props
        return discussions.map( (discussion, i) => {
            let url = `/viewdiscussion/${discussion.id}`
            return (
                <Grid.Column key={i} style={{marginTop: '5px', marginBottom: '5px'}} >
                    <Link to={{ pathname: url, query: { discussion: discussion } }} >
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
                </Grid.Column >
            ) 
        })
    }
    
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

    clickShowForm = () => {
        let { form } = this.state
        this.setState({ form: !form })
    }

    render(){
        return(
            <Segment > 
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12} >
                            <Header as='h1' textAlign='center' style={{textDecoration: 'underline'}} >Discussion Center</Header>
                        </Grid.Column >
                        <Grid.Column width={4} >
                            <Button color='blue' onClick={this.clickShowForm}>Start Discussion</Button>
                        </Grid.Column >
                    </Grid.Row>
                </Grid>
                { this.displayDiscussions() }
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { discussions: state.discussion }
}

export default connect(mapStateToProps)(Discussion)