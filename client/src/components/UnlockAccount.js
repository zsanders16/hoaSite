import React from 'react'
import { Form, Button, Header, Divider, Segment, Grid } from 'semantic-ui-react'
import { unlockPassword } from '../actions/homeowners'
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers'

class UnlockAccount extends React.Component{
    state = {password: '', passwordConfirmation: ''}

    // componentDidMount(){
    //     let string  = this.props.location.search
    //     let { dispatch, history } = this.props
    //     let headers = this.getParams(string)
    //     let obj = {headers: headers}
        // debugger
        // dispatch({ type: 'HEADERS', headers: obj })
    // }

    handleChange = (e) => {
        const { id , value } = e.target;
        this.setState({ [id]: value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let { dispatch } = this.props
        let string  = this.props.location.search
        let headers = this.getParams(string)
        let obj = {headers: headers}
        let { password, passwordConfirmation } = this.state
        dispatch({ type: 'HEADERS', headers: obj })
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

export default connect()(UnlockAccount)