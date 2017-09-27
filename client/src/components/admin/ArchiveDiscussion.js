import React from 'react'
import { getArchivedDiscussion, updateArchive } from '../../actions/discussion'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {    Segment, 
            Header, 
            Grid, 
            Message,
            Button,
            Card } from 'semantic-ui-react'

class ArchiveDiscussion extends React.Component{

    componentDidMount(){
        this.props.dispatch(getArchivedDiscussion())
    }

    displayDiscussions = () => {
        let { archived } = this.props
        return archived.map( (archive, i) => {
            return (
                    <Card color='blue' key={i} style={{margin: '5px'}}>
                        <Card.Content>
                            <Card.Header>
                                {archive.title}
                            </Card.Header>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Card.Description>
                                            {archive.description}
                                        </Card.Description>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Button primary onClick={ () => this.updateDiscussion(archive) }>Unarchive</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card.Content>
                    </Card>
                
            ) 
        })
    }

    updateDiscussion = (discussion) => {
        let {dispatch, history} = this.props
        discussion.archive = !discussion.archive
        dispatch(updateArchive(discussion, history))
    }

    displayNoDiscussions = () => {
        return(
            <Message>
                <Message.Header>
                    No Archived Discussions to display.
                </Message.Header>
            </Message>
        )
    }



    render(){
        let { archived } = this.props
        return(
            <Segment> 
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12} >
                            <Header as='h1' textAlign='center' >Discussion Archived Discussions</Header>
                        </Grid.Column >
                        <Grid.Column width={4} >
                            <Link to='/admin/discussion'><Button>View Unarchived</Button></Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        { archived.length>0 ? this.displayDiscussions() : this.displayNoDiscussions() }
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { archived: state.archived }
}

export default connect(mapStateToProps)(ArchiveDiscussion)