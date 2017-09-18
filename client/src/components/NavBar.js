import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
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
    debugger
    if(user.admin === true){
      debugger
      return activeLinks.map( (module, i) => {
        return <NavbarLink key={i} linkItem={module} />
      })
    }else if(user.id){
      debugger
      let filteredLinks = activeLinks.filter( link => {
        return link.security !== 'admin'
      })
      debugger
      return filteredLinks.map( (module, i) => {
        return <NavbarLink key={i} linkItem={module} />
      })
    }else{
      debugger
      let filteredLinks = activeLinks.filter( link => {
        return link.security === 'open'
      })
      debugger
      return filteredLinks.map( (module, i) => {
        return <NavbarLink key={i} linkItem={module} />
      })
    }
  }


  showAdmin = () => {
    const { user } = this.props
    if(user.admin){
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
      <div style={{backgroundColor: '#17202A', marginTop: '-14px'}}>
        <Menu pointing secondary>
          <Link to='/' >
            <Menu.Item name='home' style={{color: '#FDFEFE'}} />
          </Link>
          { this.showAdmin() }
          <Menu.Menu position='right'> 
            { this.displayLinks() }
            { user.id ?  <Menu.Item
                            name='Logout'
                            style={{color: '#FDFEFE'}}
                            onClick={() => dispatch(handleLogout(history))}
                          /> :
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
