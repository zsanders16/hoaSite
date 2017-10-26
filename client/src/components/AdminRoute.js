import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => (
  
  <Route {...rest} render={props => (
    isAdmin ? (
      <Component {...props}/>
     ) : (
       <Redirect to={{
         pathname: '/',
         state: { from: props.location }
       }}/>
     )
  )}/>
)

const mapStateToProps = (state) => {
  return { isAdmin: state.user.admin }
}

export default connect(mapStateToProps)(AdminRoute);
