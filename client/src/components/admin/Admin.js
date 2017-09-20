import React from 'react'
import { Grid, Card, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Admin extends React.Component{
    render(){
        return(
            <Segment basic>
                <Grid style={{marginLeft: '5px'}}>
                    <Grid.Row columns={3} >
                        <Grid.Column >
                            <Link to='admin/homeowners' >
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            Homeowners
                                        </Card.Header>
                                        <Card.Description>
                                            View all homeowners, add or remove a homeowner.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                        <Grid.Column >
                            <Link to='admin/newslettersadmin' >
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            Newsletters
                                        </Card.Header>
                                        <Card.Description>
                                            View all newsletters, add or remove a newsletter.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                        <Grid.Column >
                            <Link to='admin/ccrsadmin' >
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            CCRs and ByLaws
                                        </Card.Header>
                                        <Card.Description>
                                            View all CCRs | ByLaws, add or remove them.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Admin