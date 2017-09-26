import React from 'react'
import { Comment, Message, Button, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SingleComment extends React.Component {

    render (){
        let { comment, user } = this.props
        return(
            <Message color='blue'>
                <Comment>
                    <Comment.Content>
                        <Comment.Author as='a'>{comment.user_created}</Comment.Author>
                        <Comment.Metadata>
                            <div>{comment.time}</div>
                        </Comment.Metadata>
                        <Grid>
                            <Grid.Column width={12} textAlign='center'>
                                <Comment.Text>{comment.content}</Comment.Text>
                            </Grid.Column>
                        {user.admin || user.name === comment.user_created ?
                            <Grid.Column width={4} >
                                <Button primary content='Delete Discussion' />
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