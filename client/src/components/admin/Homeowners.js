import React from 'react'
import { Table, Button, Icon, Header, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getHomeowners, updateHomeowner } from '../../actions/homeowners'
import Homeowner from './Homeowner'
import { registerUser } from '../../actions/auth';



class Homeowners extends React.Component{
    state = { showForm: false, email: '', password: '', passwordConfirmation: '', name: '', admin: false, id: 0 }

    componentDidMount(){
        let { dispatch } = this.props
        dispatch(getHomeowners())
    }

    compare (a, b) {
        const homeownerA = a.name.toUpperCase();
        const homeownerB = b.name.toUpperCase();
        
        let comparison = 0;
        if (homeownerA > homeownerB) {
          comparison = 1;
        } else if (homeownerA < homeownerB) {
          comparison = -1;
        }
        return comparison;
      }

    displayHomeowners = () => {
        this.props.homeowners.sort(this.compare)
        return this.props.homeowners.map ( (homeowner, i)  => {
            return ( <Homeowner key={i} homeowner={homeowner} handleAdminSwitch={this.handleAdminSwitch} editHomeowner={this.editHomeowner}/> )
        })
    }

    addUser = () => {
        let { showForm } = this.state
        this.setState({ showForm: !showForm })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, passwordConfirmation, name, id} = this.state;
        const { dispatch, history } = this.props;

        if(id){
            dispatch(updateHomeowner({name, email, id}))
            this.setState({ showForm: false, email: '', password: '', passwordConfirmation: '', name: '' })
        }else{
            if(password === passwordConfirmation){
                dispatch(registerUser(email, password, passwordConfirmation, name, history));
                this.addUser();
                this.setState({ showForm: false, email: '', password: '', passwordConfirmation: '', name: '' })
            }else{
            alert('Passwords do NOT match!');
            }
        }
      }
    
    handleChange = (e) => {
        // use e to grab the id off the element also the value and set state
        // const { id, value } = e.target;
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value });
    }

    editHomeowner = (homeowner) => {
        this.setState({name: homeowner.name, email: homeowner.email, id: homeowner.id, showForm: true})
    }

    
    viewHomeowners = () => {
        let { homeowners } = this.props
        return(
            <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='4' textAlign='center' >List of Homeowners</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Homeowner</Table.HeaderCell>
                    <Table.HeaderCell>Email Address</Table.HeaderCell>
                    <Table.HeaderCell>IsAdmin</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {homeowners.length > 0 ? this.displayHomeowners() : <Table.Row><Table.Cell colSpan='4' textAlign='center' >No Homeowners to Display</Table.Cell></Table.Row>}
            </Table.Body>
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        <Button floated='right' icon labelPosition='left' primary size='small' onClick={this.addUser}>
                            <Icon name='user' /> Add User
                        </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
        )
    }

    displayForm = () => {
        const { email, password, passwordConfirmation, name, id } = this.state;
        return(
            <Segment >
                <Header as='h1' textAlign='center'>Add User</Header>
                <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input
                    id='email'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Name (First and Last)</label>
                    <input
                    id='name'
                    placeholder='Name'
                    required
                    value={name}
                    onChange={this.handleChange}
                    />
                </Form.Field>
                { id ? '' : 
                <div>
                    <Form.Field>
                        <label>Password</label>
                        <input
                        id='password'
                        placeholder='Password'
                        type='password'
                        required
                        value={password}
                        onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password Confirmation</label>
                        <input
                        id='passwordConfirmation'
                        placeholder='Password Confirmation'
                        type='password'
                        required
                        value={passwordConfirmation}
                        onChange={this.handleChange}
                        />
                    </Form.Field>
                    </div>
                }
                <Segment basic textAlign='right'>
                    <Button onClick={ this.addUser }>Cancel</Button>
                    <Button type='submit'>{ id ? 'Update' : 'Submit'}</Button>
                </Segment>
                </Form>
            </Segment>
        )
    }

    render(){
        let { showForm } = this.state
        return(
            showForm ? this.displayForm() : this.viewHomeowners()
        )
    }
}

const mapStateToProps = (state) => {
    return { homeowners: state.homeowners }
}

export default connect(mapStateToProps)(Homeowners)