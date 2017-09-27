import React from 'react'
import { Comment, Message, Button, Grid, Popup, Icon, Confirm } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/comments'

class SingleComment extends React.Component {
    state = { open: false }

    deleteComment = (e) => {
        let { comment, dispatch } = this.props
        dispatch(deleteComment(comment))
    }

    handleConfirm = () => {
        this.setState({ open: false })
        this.deleteComment()
    }
    handleCancel = () => this.setState({ open: false })
    show = () => this.setState({ open: true })

    render (){
        let { comment, user } = this.props
        let { open } = this.state
        return(
            <Message color='blue'>
                <Comment>
                    <Comment.Content>
                        <Comment.Author as='a'>Posted by: {comment.user_created}</Comment.Author>
                        <Comment.Metadata>
                            <div>{comment.time}</div>
                        </Comment.Metadata>
                        <Grid>
                            <Grid.Column width={14} textAlign='center'>
                                <Comment.Text>{comment.content}</Comment.Text>
                            </Grid.Column>
                        {user.admin || user.name === comment.user_created ?
                            <Grid.Column width={2} >
                            <Popup
                                trigger={<Button primary onClick={this.show}><Icon name='trash outline'/></Button>}
                                content='Delete Comment'
                            />
                            <Confirm
                                open={open}
                                cancelButton='Never mind'
                                confirmButton="Let's do it"
                                content='Are you sure you want to delete this comment?'
                                onCancel={this.handleCancel}
                                onConfirm={this.handleConfirm}
                            /> 
                            </Grid.Column>
                            :
                            undefined
                        }
                        </Grid> 
                    </Comment.Content>
                </Comment>
            </Message>
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(SingleComment)