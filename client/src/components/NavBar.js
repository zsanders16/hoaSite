import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import NavbarLink from './NavbarLink'

class NavBar extends Component {
  state = { open: [], ho: [], admin: [] }


  componentWillReceiveProps(nextProps){
    
    if(nextProps.adminModules !== this.props.adminModules){

      nextProps.adminModules.forEach( obj => {
        if(obj.active === true){
          if(obj.security === 'admin'){
            this.setState({ admin: [...this.state.admin, obj] })
            // open.push(obj)
          }else if(obj.security === 'ho') {
            this.setState({ ho: [...this.state.ho, obj] })
            // ho.push(obj)
          }else{
            this.setState({ open: [...this.state.open, obj] })
            // admin.push(obj)
          }
        }
      });
    }
  }

  displayUserLinks = () => {
    const { open, ho } = this.state
    const combined = [...open, ...ho]
    return combined.map( (module, i) => {
      return <NavbarLink key={i} linkItem={module} />
    })
  }

  displayOpenLinks = () => {
    const { open } = this.state
    return open.map( (module, i) => {
      return <NavbarLink key={i} linkItem={module} />
    })
  }

  // rightNavs = () => {
  //   const { user, dispatch, history } = this.props;
  //   const { open, ho, admin } = this.state
  //   if(user.id) {
  //     return(
  //       <Menu.Menu position='right'>
  //         <Link to='/contacts' >
  //           <Menu.Item name='Contacts' style={{color: '#FDFEFE'}} />
  //         </Link>
  //         <Link to='/news' >
  //           <Menu.Item name='News' style={{color: '#FDFEFE'}} />
  //         </Link>
  //         <Link to='/documents' >
  //           <Menu.Item name='Documents' style={{color: '#FDFEFE'}} />
  //         </Link>
  //         <Link to='discussion' >
  //           <Menu.Item name='Discussion Board' style={{color: '#FDFEFE'}} />
  //         </Link>
  //         <Menu.Item
  //           name='Logout'
  //           style={{color: '#FDFEFE'}}
  //           onClick={() => dispatch(handleLogout(history))}
  //         />
  //       </Menu.Menu>
  //     );
  //   } else {
  //     return(
  //       <Menu.Menu position='right'>
  //         <Link to='/register' >
  //           <Menu.Item name='Register' style={{color: '#FDFEFE'}} />
  //         </Link>
  //         <Link to='/login'>
  //           <Menu.Item name='Login' style={{color: '#FDFEFE'}}/>
  //         </Link>
  //       </Menu.Menu>
  //     );
  //   }
  // }

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
            { user.id ? this.displayUserLinks() : this.displayOpenLinks() }
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
