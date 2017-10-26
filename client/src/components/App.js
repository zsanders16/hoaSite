import React, { Component } from 'react';
import NoMatch from './NoMatch';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './homepages/Home';
import NavBar from './NavBar';
import AdminRoutes from './admin/AdminRoutes'
import Newsletters from './Newsletters'
import CcrBylaws from './CcrBylaws'
import Legal from './Legal'
import Minutes from './Minutes'
import Discussion from './Discussion'
import UnlockAccount from './UnlockAccount'
import ViewDiscussion from './ViewDiscussion'
import ChangePassword from './ChangePassword'
import ProtectedRoute from './ProtectedRoute'
import AdminRoute from './AdminRoute'
import AllEvents from './AllEvents'
import Watch from './Watch'
import { Switch, Route } from 'react-router-dom'
import FetchUser from './FetchUser';
import { Container, Grid } from 'semantic-ui-react'
import ViewPDF from './ViewPDF'
import Members from './board/Members'
import ForgotPassword from './ForgotPassword'
import HomeHeaderImage from './homepages/HomeHeaderImage'
import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.min.css'

class App extends Component {

  createRoutes = () => {
    const activeRoutes = this.props.adminModules.filter( module => {
      return module.active === true
    })
    let finishedRoutes =  activeRoutes.map( (module, i) => {

      const all = {
        'Newsletters'     : Newsletters,
        'CCRs | ByLaws'   : CcrBylaws,
        'Legal'           : Legal,
        'Meeting Minutes' : Minutes,
        "Discussion Forum": Discussion,
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
    return (
      <div style={{background: 'linear-gradient(#1C599C, #ADD1E9)', minHeight: '1300px'}}>
        <Container>
          <Grid columns={1} >
            <Grid.Row only='mobile'>
              <Grid.Column>
                <HomeHeaderImage />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row  only='tablet computer'>
              <Grid.Column>
                <HomeHeaderImage />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <NavBar />
          <Flash />
          <FetchUser>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/unlock' component={UnlockAccount} />
              <Route exact path='/viewpdf' component={ViewPDF} />
              <Route exact path='/viewdiscussion/:id' component={ViewDiscussion} />
              <Route exact path='/board_members' component={Members} />
              <Route exact path='/forgotPassword' component={ForgotPassword} />
              <Route exact path='/allEvents' component={AllEvents} />
              <Route exact path='/watch' component={Watch} />
              <ProtectedRoute exect path='/changepassword' component={ChangePassword} />
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
// <Segment basic textAlign='left' style={{height: '150px', fontFamily: 'cursive', backgroundColor: '#C2CFDA' }}>
//     <div style={{marginLeft: '10px', fontSize: '250%', fontWeight: 'bold'}} ><p>Woodstock Village</p></div>
//     <div style={{marginLeft: '25px', marginTop: '20px' , fontSize: '150%'}}><p>Home Owners Association | SLC Ut</p></div>
//   </Segment>
