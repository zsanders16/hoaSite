import React, { Component } from 'react';
import Admin from './Admin'
import AdminRoute from '../AdminRoute'
import Homeowners from './Homeowners'
import NewslettersAdmin from './NewslettersAdmin'
import CcrsAdmin from './CcrsAdmin'
import Legal from './LegalAdmin'
import Minutes from './MinutesAdmin'
import Discussion from './DiscussionAdmin'
import Events from './Events'
import ArchiveDiscussion from './ArchiveDiscussion'
import { Switch, Route } from 'react-router-dom'
import NoMatch from '../NoMatch';
import Emails from '../emails/Emails'
import HomePages from '../homepages/HomePages'
import CarouselAdmin from '../carousel/CarouselAdmin'
import LinksAdmin from '../links/LinksAdmin'

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
            <AdminRoute exact path='/admin/discussion' component={Discussion} />
            <AdminRoute exact path='/admin/discussion/archive' component={ArchiveDiscussion} />
            <AdminRoute exact path='/admin/emails' component={Emails} />
            <AdminRoute exact path='/admin/homepages' component={HomePages} />
            <AdminRoute exact path='/admin/events' component={Events} />
            <AdminRoute exact path='/admin/carousel' component={CarouselAdmin} />
            <AdminRoute exact path='/admin/links' component={LinksAdmin} />
            <Route component={NoMatch} />
        </Switch>
    );
  }
}

export default AdminRoutes;
