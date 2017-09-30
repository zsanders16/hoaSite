import React from 'react'
import { Grid, Card, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Admin extends React.Component{
    render(){
        return(
            <Segment basic>
                <Grid style={{marginLeft: '5px'}}>
                    <Grid.Row columns={3} >
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column style={{marginTop: '5px', marginBottom: '5px'}}>
                            <Link to='admin/legal' >
                                <Card>
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
                                <Card>
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
                                <Card>
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
                              <Card>
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
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Admin
