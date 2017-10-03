import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { unlockPassword } from '../actions/homeowners'
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers'

class UnlockAccount extends React.Component{
    state = {password: '', passwordConfirmation: ''}

    componentDidMount(){
        let string  = this.props.location.search
        let { dispatch } = this.props
        let obj = this.getParams(string)
        debugger
        dispatch({type: 'SET_HEADERS', headers: obj })
    }

    handleChange = (e) => {
        const { id , value } = e.target;
        this.setState({ [id]: value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let { dispatch } = this.props
        let string  = this.props.location.search
        let obj = this.getParams(string)
        let { password, passwordConfirmation } = this.state
        dispatch(unlockPassword(obj, password, passwordConfirmation))
        this.setState({password: '', passwordConfirmation: ''})
    }

    getParams = (query) => {
        if (!query) {
          return { };
        }
      
        return (/^[?#]/.test(query) ? query.slice(1) : query)
          .split('&')
          .reduce((params, param) => {
            let [ key, value ] = param.split('=');
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
            return params;
        }, { });
    };

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

export default connect()(UnlockAccount)