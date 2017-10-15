import React from 'react'
import { Header, Segment, Form, Button, Divider, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { resetPassword } from '../actions/homeowners'

class ForgotPassword extends React.Component{
    state = { email: ''};
    
      handleChange = (e) => {
        const { id , value } = e.target;
        this.setState({ [id]: value });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, history } = this.props;
        const { email } = this.state;
    
        dispatch(resetPassword(email, dispatch, history));
      }
    
      render() {
        const { email } = this.state;
    
        return(
          <Segment >
            <Header as='h1' textAlign='center'>Reset Password</Header>
            <Divider />
            
            <Form onSubmit={this.handleSubmit}>
              <Grid>
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Form.Field>
                    <Header as='h5'>Please enter your email that is associated with this account.</Header>
                    <Header as='h5'>An email with instructions on how to reset your password will be sent to this email address.</Header>
                    <label>Email</label>
                    <input
                      autoFocus
                      required
                      id='email'
                      value={email}
                      placeholder='Email'
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Segment textAlign='center' basic>
                    <Button primary type='submit'>Submit</Button>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Form>
          </Segment>
        );
      }
}

export default connect()(ForgotPassword)