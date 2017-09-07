import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Admin extends React.Component{
    render(){
        return(
            <Grid>
                <Grid.Row columns={3} >
                    <Grid.Column style={{margin: '5px', marginTop: '20px'}}>
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
                    <Grid.Column style={{margin: '5px', marginTop: '20px'}}>
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
                </Grid.Row>
            </Grid>
        )
    }
}

export default Admin