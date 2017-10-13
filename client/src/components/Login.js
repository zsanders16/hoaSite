import React, { Component } from 'react';
import { Header, Segment, Form, Button, Divider, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import { Link } from 'react-router-dom'

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;

    return(
      <Segment >
        <Header as='h1' textAlign='center'>Login</Header>
        <Divider />
        
        <Form onSubmit={this.handleSubmit}>
          <Grid>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field>
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
              <Form.Field>
                <label>Password</label>
                <input
                  required
                  id='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
              </Segment>
              <Link to='/forgotPassword'>
                <p>Forgot Password?</p>
              </Link>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Login);
