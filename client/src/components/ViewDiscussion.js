import React from 'react'
import { Card, Button, Form, Comment, Header, Segment, Grid, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SingleComment from './SingleComment'
import { getComments, addComment } from '../actions/comments'


class ViewDiscussion extends React.Component{
    state = { discussion: {}, text: '', discussionId: '' }

    componentDidMount(){
        let discussionId = this.props.match.params.id
        this.setState({discussionId: discussionId})
        this.props.dispatch(getComments(discussionId))
        let discussion = this.props.discussions.filter( discussion => {
            return discussion.id === parseInt(discussionId)
        })

        this.setState({discussion: discussion[0]})
    }   

    getComments = () => {
        let { comments } = this.props
        return comments.map( (comment, i) => {
            return <SingleComment key={i} comment={comment} />
        })
    }

    noComments = () => {
        return(
            <Segment basic>There are no Comments. Be the first to comment.</Segment>
        )
    }

    submitComment = () => {
        let { user, dispatch } = this.props
        let { discussionId, text } = this.state
        let comment = {content: text, user_created: user.name}
        dispatch(addComment(discussionId, comment))
    }

    textChange = (e) => {
        this.setState({text: e.target.value})
    }

    render(){
        let { comments, user } = this.props
        let { discussion, text } = this.state
        return(
            <Grid>
                <Grid.Column width={3}/>
                <Grid.Column width={10}>
                    <Card fluid style={{marginTop: '10px'}}>
                        {user.admin ?
                            <Grid>
                                <Grid.Column width={8} textAlign='center'>
                                    <Card.Content as='h1' style={{marginTop: '5px'}} header={discussion.title} />
                                </Grid.Column>
                                <Grid.Column width={4} >
                                    <Button primary content='Delete Discussion' />
                                </Grid.Column>
                                <Grid.Column width={4} >
                                    <Button primary content='Archive Discussion' />
                                </Grid.Column>
                            </Grid> :
                            undefined
                        }
                        <Card.Content description={discussion.description} />
                        <Card.Content extra>
                            <Comment.Group>
                                <Header as='h3' dividing>Comments</Header>
                                { comments.length>0 ? this.getComments() : this.noComments() }
                                <Form reply>
                                    <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={this.submitComment} />  
                                    <Divider />
                                    <Form.TextArea value={text} onChange={this.textChange}/>
                                </Form>
                            </Comment.Group>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>

        )
    }
}

const mapStateToProps = (state) => {
    return { comments: state.comments, discussions: state.discussion, user: state.user }
}

export default connect(mapStateToProps)(ViewDiscussion)