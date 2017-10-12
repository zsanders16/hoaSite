import React from 'react'
import { Grid, Card, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Admin extends React.Component{
    render(){
        return(
            <Segment basic>
                <Grid centered columns={3} style={{marginLeft: '3px'}}>
                    <Grid.Row >
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/homeowners' >
                                <Card style={{height: '100px'}}>
                                    <Card.Content>
                                        <Card.Header >
                                            Homeowners
                                        </Card.Header>
                                        <Card.Description>
                                            View all homeowners, add or remove a homeowner.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/newslettersadmin' >
                                <Card style={{height: '100px'}}>
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
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/ccrsadmin' >
                                <Card style={{height: '100px'}}>
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
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/legal' >
                                <Card style={{height: '100px'}}>
                                    <Card.Content>
                                        <Card.Header>
                                            Legal
                                        </Card.Header>
                                        <Card.Description>
                                            View all Legal Documents, add or remove them.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/minutes' >
                                <Card style={{height: '100px'}}>
                                    <Card.Content>
                                        <Card.Header>
                                            Minutes
                                        </Card.Header>
                                        <Card.Description>
                                            View all Meeting Minutes, add or remove them.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/discussion' >
                                <Card style={{height: '100px'}}>
                                    <Card.Content>
                                        <Card.Header>
                                            Discussions
                                        </Card.Header>
                                        <Card.Description>
                                            View all Discussions, add, remove, or archive them.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/emails' >
                                <Card style={{height: '100px'}}>
                                    <Card.Content>
                                        <Card.Header>
                                            Emails
                                        </Card.Header>
                                        <Card.Description>
                                            View all Emails; add, remove, or archive them.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/events' >
                                <Card style={{height: '100px'}}>
                                    <Card.Content>
                                        <Card.Header>
                                            Events
                                        </Card.Header>
                                        <Card.Description>
                                            View, Add or Modify all upcoming events.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                      <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                          <Link to='admin/homepages' >
                              <Card style={{height: '100px'}}>
                                  <Card.Content>
                                      <Card.Header>
                                          Home Pages
                                      </Card.Header>
                                      <Card.Description>
                                          View all Home Pages; add, remove, or archive them.
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
