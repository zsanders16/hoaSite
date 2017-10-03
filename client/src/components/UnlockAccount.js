import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { unlockPassword } from '../actions/homeowners'

class UnlockAccount extends React.Component{
    state = {password: '', passwordConfirmation: ''}

    handleChange = (e) => {
        const { id , value } = e.target;
        this.setState({ [id]: value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let string  = this.props.location.search
        let { password, passwordConfirmation } = this.state
        unlockPassword(string, password, passwordConfirmation)
    }

    render(){
        let { password, passwordConfirmation } = this.state
        return(
            <Form onSubmit={this.handleSubmit} >
                <Form.Group unstackable widths={1}>
                <Form.Input 
                    value={password} 
                    onChange={this.handleChange} 
                    id='password' 
                    type='password'
                    required
                    label='New Password' 
                    placeholder='New Password' />
                </Form.Group>
                <Form.Group widths={1}>
                <Form.Input 
                    value={passwordConfirmation} 
                    onChange={this.handleChange} 
                    id='passwordConfirmation'
                    type='password'
                    required
                    label='New Password Confirmation' 
                    placeholder='New Password Confirmation' />
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default UnlockAccount