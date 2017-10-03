import React from 'react'
import { connect } from 'react-redux'
import { changePassword } from '../actions/homeowners'
import { Form, Button, Header, Divider, Segment, Grid } from 'semantic-ui-react'

class ChangePassword extends React.Component{
    state = {password: '', passwordConfirmation: ''}
    
        handleChange = (e) => {
            const { id , value } = e.target;
            this.setState({ [id]: value });
        }
        
        handleSubmit = (e) => {
            e.preventDefault();
            let { dispatch, history } = this.props
            let { password, passwordConfirmation } = this.state
            dispatch(changePassword (password, passwordConfirmation, history))
            this.setState({password: '', passwordConfirmation: ''})
        }
    
    
        render(){
            let { password, passwordConfirmation } = this.state
            return(
                <Segment>
                    <Header as='h2' textAlign='center' >Change Your Password</Header>
                    <Divider />
                    <Grid>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Input 
                                    value={password} 
                                    onChange={this.handleChange} 
                                    id='password' 
                                    type='password'
                                    required
                                    label='New Password' 
                                    placeholder='New Password' />
                                <Form.Input 
                                    value={passwordConfirmation} 
                                    onChange={this.handleChange} 
                                    id='passwordConfirmation'
                                    type='password'
                                    required
                                    label='New Password Confirmation' 
                                    placeholder='New Password Confirmation' />
                                <Button primary type='submit'>Submit</Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Segment>
            )
        }
}

export default connect()(ChangePassword)