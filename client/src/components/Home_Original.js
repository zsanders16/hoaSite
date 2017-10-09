import React, { Component } from 'react';
import { Container, Segment, Image, Grid, Divider } from 'semantic-ui-react';
import logo from '../assets/logo.jpg'


class Home extends Component {
  render() {
    return(
      <div>
        <Container style={{backgroundColor: '#FFFFFF'}} >
          <Image src={logo} spaced fluid style={{padding: '20px', paddingRight: '30px'}}/>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={12}>
                <p style={{fontSize: '18px'}}>
                  Woodstock Village is a Planned Unit Development (PUD) ideally located within a short distance from public 
                  transportation, schools, churches, shopping, recreation and interstate highways. 
                  <br />
                  <br />
                  It was developed in 1977 and consists of 103 single family homes with small lots and a zero lot line concept. 
                  It is officially annexed by Murray City but remains in the Granite School District boundaries. Prior to its 
                  development, it was a small golf course and practice range. 
                  <br />
                  <br />
                  In order to maintain the integrity of the neighborhood and protect our homeowners’ investment, there are 
                  reasonable restrictive covenants which are enforced by an elected association board. There is a small yearly 
                  assessment to pay for decorative street lighting and common areas. Woodstock Village also constructed a secure 
                  recreational vehicle storage area to rent at a reasonable monthly fee on a space available basis. 
                  <br />
                  <br />
                  We appreciate your interest in our lovely community.
                </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p style={{fontFamily: 'cursive', fontSize: '25px', textDecoration: 'underline' }} >Contacts</p>
                <p>
                  For questions and information, please contact Person 1 or Person 2.
                  <br />
                  <br />
                  To reach the Board of Directors, email email@email.com.
                </p>
                <Divider />
                <p style={{fontFamily: 'cursive', fontSize: '25px', textDecoration: 'underline' }} >Addtional Information</p>
                <p>
                  We can add any additonal information here that you would like.
                  <br />
                  <br />
                  This would be unprotected and open to everyone to see.
                </p>
                <Divider />
                <p style={{fontFamily: 'cursive', fontSize: '25px', textDecoration: 'underline' }} >Member Access</p>
                <p>
                  Access to this full site requires a login and password, and is limited to Woodstock Village property owners.
                  <br />
                  <br />
                  <a href='#'>To request access click here</a>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <footer>
            <Segment basic textAlign='center'>
              <p>WoodStock Village Property Owners Association</p>
              <p>Mailing Address</p>
              <Divider hidden />
              <a href='#'>Contact Site Adminstrator</a>
            </Segment>
          </footer>
        </Container>  
      </div>
    );
  }
}

export default Home;
