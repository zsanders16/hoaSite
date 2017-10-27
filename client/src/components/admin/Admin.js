import React from 'react'
import { Grid, Card, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

let adminModules = [
    {title: 'Homeowners', link: 'admin/homeowners', description: 'View all homeowners, add or remove a homeowner'},
    {title: 'Newsletters', link: 'admin/newslettersadmin', description: 'View all newsletters, add or remove a newsletter.'},
    {title: 'CCRs and ByLaws', link: 'admin/ccrsadmin', description: 'View all CCRs | ByLaws, add or remove them.'},
    {title: 'Legal', link: 'admin/legal', description: 'View all Legal Documents, add or remove them.'},
    {title: 'Minutes', link: 'admin/minutes', description: 'View all Meeting Minutes, add or remove them.'},
    {title: 'Discussions', link: 'admin/discussion', description: 'View all Discussions, add, remove, or archive them.'},
    {title: 'Emails', link: 'admin/emails', description: 'View all Emails; add, remove, or archive them.'},
    {title: 'Events', link: 'admin/events', description: 'View, Add or Modify all upcoming events.'},
    {title: 'Home Pages', link: 'admin/homepages', description: 'View all Home Pages; add, remove, or archive them.'},
    {title: 'Carousel Images', link: 'admin/carousel', description: 'View Home Page Carousel Images; add, remove, or delete.'},
]

class Admin extends React.Component{

    displayCards =() => {
        return adminModules.map( (module, i) => {
            return(
                <Grid.Column key={i} computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
                    <Link to={module.link} >
                        <Card style={{height: '100px'}}>
                            <Card.Content>
                                <Card.Header >
                                    {module.title}
                                </Card.Header>
                                <Card.Description>
                                    {module.description}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Link>
                </Grid.Column>
            )
        })
    }

    render(){
        return(
            <Segment basic>
                <Grid centered  style={{marginLeft: '3px'}}>
                    <Grid.Row >
<<<<<<< HEAD
                        { this.displayCards()}
=======
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                        <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                      <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
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
                      <Grid.Column computer={5} tablet={8} mobile={16} style={{marginTop: '5px', marginBottom: '5px'}}>
                          <Link to='admin/carousel' >
                              <Card style={{height: '100px'}}>
                                  <Card.Content>
                                      <Card.Header>
                                          Image Carousel
                                      </Card.Header>
                                      <Card.Description>
                                          View all Home Page Carousel Images; add, remove, or archive them.
                                      </Card.Description>
                                  </Card.Content>
                              </Card>
                          </Link>
                      </Grid.Column>
>>>>>>> WIP Carousel Editing form, and layouts finished
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Admin
