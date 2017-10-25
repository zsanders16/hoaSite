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
                        { this.displayCards()}
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Admin
