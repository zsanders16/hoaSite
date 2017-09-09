import React, { Component } from 'react';
import NoMatch from './NoMatch';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import NavBar from './NavBar';
import AdminRoutes from './admin/AdminRoutes'
import Newsletters from './Newsletters'
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute'
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import { Container, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  createRoutes = () => {
    const activeRoutes = this.props.adminModules.filter( module => {
      return module.active === true
    })
    let finishedRoutes =  activeRoutes.map( (module, i) => {

      const all = {
        'Newsletters' : Newsletters
      }
      
      const Type = all[module.display_name]
      if(module.security === 'admin'){
        return <AdminRoute key={i} exact path={module.route} component={Type} />
      }else if( module.security === 'ho'){
        return <ProtectedRoute key={i} exact path={module.route} component={Type} />
      }else{
        return <Route key={i} exact path={module.route} component={Type} />
      }
    })
    return finishedRoutes
  }

  render() {
    const { adminModules } = this.props  
    return (
      <div style={{backgroundColor: '#922B21'}}>
        <Container>
          <Segment basic textAlign='left' style={{height: '150px', fontFamily: 'cursive', backgroundColor: '#A9CCE3' }}>
            <div style={{marginLeft: '150px', marginTop: '10px', fontSize: '65px', fontWeight: 'bold'}} ><p>Woodstock Village</p></div>
            <div style={{marginLeft: '400px', fontSize: '25px'}}><p>Home Oweners Association | SLC Ut</p></div>
          </Segment>
          <NavBar />
          <Flash />
          <FetchUser>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              {/* { adminModules.includes('newsletter') ? 
                <Route key={'open'} exact path='/newsletters' component={Newsletters} /> :
                undefined
              } */}
              { this.createRoutes() }
              <AdminRoute path='/admin' component={AdminRoutes} />
              
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </Container>
      </div>
    );
  }
}

export default App;
