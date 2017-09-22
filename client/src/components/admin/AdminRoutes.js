import React, { Component } from 'react';
import Admin from './Admin'
import AdminRoute from '../AdminRoute'
import Homeowners from './Homeowners'
import NewslettersAdmin from './NewslettersAdmin'
import CcrsAdmin from './CcrsAdmin'
import Legal from './LegalAdmin'
import Minutes from './MinutesAdmin'
import { Switch, Route } from 'react-router-dom'
import NoMatch from '../NoMatch';

class AdminRoutes extends Component {
  render() {
    return (
        <Switch>
            <AdminRoute exact path='/admin' component={Admin} />
            <AdminRoute exact path='/admin/homeowners' component={Homeowners} />
            <AdminRoute exact path='/admin/newslettersadmin' component={NewslettersAdmin} />
            <AdminRoute exact path='/admin/ccrsadmin' component={CcrsAdmin} />
            <AdminRoute exact path='/admin/legal' component={Legal} />
            <AdminRoute exact path='/admin/minutes' component={Minutes} />
            <Route component={NoMatch} />
        </Switch>
    );
  }
}

export default AdminRoutes;