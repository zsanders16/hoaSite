import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import NavbarLink from './NavbarLink'

class NavBar extends Component {
  // state = { open: [], ho: [], admin: [] }
  state = { activeLinks: [] }


  componentWillReceiveProps(nextProps){
    if(nextProps.adminModules !== this.props.adminModules){

      let activeLinks = nextProps.adminModules.filter( element => {
        return element.active === true
      });
      this.setState({ activeLinks: activeLinks})
    }
  }

  displayLinks = () => {

    let { activeLinks } = this.state
    let { user } = this.props
    if(user.admin === 1){
      return activeLinks.map( (module, i) => {
        return <NavbarLink key={i} linkItem={module} />
      })
    }else if(user.id){
      let filteredLinks = activeLinks.filter( link => {
        return link.security !== 'admin'
      })
      return filteredLinks.map( (module, i) => {
        return <NavbarLink key={i} linkItem={module} />
      })
    }else{
      let filteredLinks = activeLinks.filter( link => {
        return link.security === 'open'
      })
      return filteredLinks.map( (module, i) => {
        return <NavbarLink key={i} linkItem={module} />
      })
    }
  }


  showAdmin = () => {
    const { user } = this.props
    if(user.admin == 1){
      return(
        <Link to='/admin' >
          <Menu.Item name='Admin' style={{color: '#FDFEFE'}} />
        </Link>
      )
    }
  }

  render() {
    const { user, dispatch, history } = this.props
    return (
      <div style={{backgroundColor: '#17202A', marginTop: '-14px', borderRadius: '0 0 7px 7px'}}>
        <Menu pointing secondary reversed='mobile'>
          <Link to='/' >
            <Menu.Item name='home' style={{color: '#FDFEFE'}} />
          </Link>
          <Link to='/board_members'>
            <Menu.Item name='HOA Board' style={{ color: '#FDFEFE' }} />
          </Link>
          { this.showAdmin() }
          <Menu.Menu position='right'>
            { this.displayLinks() }
            { user.id ?   <Dropdown text='Settings' style={{color: '#FDFEFE', marginTop: '9px', marginRight: '8px'}}>
                            <Dropdown.Menu>
                              <Link to='/changepassword' >
                                <Dropdown.Item text='Change Password' />
                              </Link>
                              <Dropdown.Divider />
                              <Dropdown.Item text='Logout' style={{color: '#FDFEFE', float: 'right'}} onClick={() => dispatch(handleLogout(history))}  />
                            </Dropdown.Menu>
                          </Dropdown>
                             :
                          <Link to='/login' >
                            <Menu.Item name='Login' style={{color: '#FDFEFE'}}/>
                          </Link>
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, adminModules: state.adminModules }
}

export default withRouter(connect(mapStateToProps)(NavBar));
