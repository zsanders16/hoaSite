import React from 'react'
import { Table, Button, Icon, Header, Form, Segment, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getHomeowners, updateHomeowner } from '../../actions/homeowners'
import Homeowner from './Homeowner'
import { registerUser } from '../../actions/auth';
import ReactPhoneInput from 'react-phone-input'



class Homeowners extends React.Component{
    state = { showForm: false,
                email: '',
                password: '',
                passwordConfirmation: '',
                name: '',
                address: '',
                number: '',
                id: 0,
                isAdmin: 0,
                title: '',
                search: '',
            }

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

    displayHomeowners = (homeowners) => {
        homeowners.sort(this.compare)
        return homeowners.map ( (homeowner, i)  => {
            return (
              <Homeowner
                key={i}
                homeowner={homeowner}
                editHomeowner={this.editHomeowner}
                redisplayHomeowners={this.redisplayHomeowners} />
            )
        })
    }

    addUser = () => {
        let { showForm } = this.state
        this.setState({ showForm: !showForm })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, passwordConfirmation, name, id, number, address, title } = this.state;
        const { dispatch } = this.props;

        if(id>0){
            let homeowner = { id, name, email, number, address, title}
            dispatch(updateHomeowner(homeowner))
            this.setState({ showForm: false, email: '', name: '', number: '', address: '', id: 0, title: ''})
        }else{
            if(password === passwordConfirmation){
                let user = { name, email, number, address, password, passwordConfirmation }
                dispatch(registerUser(user));
                this.addUser();
                this.setState({ showForm: false,
                                email: '',
                                password: '',
                                passwordConfirmation: '',
                                name: '',
                                number: '',
                                address: '' })
            }else{
            alert('Passwords do NOT match!');
            }
        }
      }

    handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value });
    }

    editHomeowner = (homeowner) => {
        this.setState({name: homeowner.name,
                        email: homeowner.email,
                        id: homeowner.id,
                        number: homeowner.number,
                        address: homeowner.address,
                        showForm: true,
                        title: homeowner.title,
                        isAdmin: homeowner.admin
                    })
    }

    handlePhoneChange = (e) => {
        this.setState({number: e})
    }

    modifyHomeowners = () => {
        let { search } = this.state
        let { homeowners } = this.props
        if(search.length > 0){
            let newHomeownerList = homeowners.filter( h => {
                return (new RegExp(`${search}`, 'i')).test(h.name)
            })
            return this.viewHomeowners(newHomeownerList)
        }else{
            return this.viewHomeowners(homeowners)
        }
    }


    viewHomeowners = (homeowners) => {
        let { search } = this.state
        return(
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7' textAlign='center' >
                            <Grid columns={3}>
                                <Grid.Row>
                                    <Grid.Column verticalAlign='bottom'>
                                        <Form>
                                            <Form.Field>
                                            <input id='search' value={search} onChange={this.handleChange} placeholder='Search by Name' />
                                            </Form.Field>
                                        </Form>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as='h2' icon textAlign='center'>
                                            <Icon name='users' circular />
                                            <Header.Content>
                                                Homeowners
                                            </Header.Content>
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Homeowner</Table.HeaderCell>
                        <Table.HeaderCell>Email Address</Table.HeaderCell>
                        <Table.HeaderCell>Number</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>IsAdmin</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { homeowners.length > 0 ?
                        this.displayHomeowners(homeowners) :
                        <Table.Row>
                            <Table.Cell colSpan='4' textAlign='center' >No Homeowners to Display</Table.Cell>
                        </Table.Row>
                    }
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7'>
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
        const { email, password, passwordConfirmation, name, address, number, id, isAdmin, title } = this.state;
        return(
            <Segment >
                <Header as='h1' textAlign='center'>{ id>0 ? 'Edit User' : 'Add User' }</Header>
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
                { isAdmin &&
                    <Form.Field>
                        <label>Title</label>
                        <input
                        id='title'
                        placeholder='Title'
                        value={title}
                        onChange={this.handleChange}
                        />
                    </Form.Field>
                }
                <Header as='h5'>Phone Number</Header>
                <ReactPhoneInput value={number}
                                    style={{marginTop: '-12px'}}
                                    defaultCountry={'us'}
                                    onChange={this.handlePhoneChange}
                />
                <Form.Field style={{marginTop: '15px'}}>
                    <label>Address</label>
                    <input
                    id='address'
                    placeholder='Address'
                    value={address}
                    onChange={this.handleChange}
                    />
                </Form.Field>
                { id ? '' :
                <div >
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
                    <Button primary onClick={ this.addUser }>Cancel</Button>
                    <Button primary type='submit'>{ id ? 'Update' : 'Submit'}</Button>
                </Segment>
                </Form>
            </Segment>
        )
    }

    render(){
        let { showForm } = this.state
        return(
            showForm ? this.displayForm() : this.modifyHomeowners()
        )
    }
}

const mapStateToProps = (state) => {
    return { homeowners: state.homeowners }
}

export default connect(mapStateToProps)(Homeowners)
