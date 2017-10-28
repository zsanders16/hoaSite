import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import homeowners from './homeowners'
import adminModules from './adminModules'
import newsletters from './newsletters'
import ccrs from './ccrs'
import bylaws from './bylaws'
import legal from './legal'
import minutes from './minutes'
import discussion from './discussion'
import displayPDF from './displayPDF'
import comments from './comments'
import archived from './archived'
import emails from './emails'
import events from './events'
import homepages from './homepages'
import homepage from './homepage'
import requests from './requests'
import members from './members'
import watch from './watch'
import carousel from './carousel'
import links from './links'


const rootReducer = combineReducers({
    links,
    carousel,
    members,
    requests,
    homepage,
    homepages,
    emails,
    user,
    flash,
    homeowners,
    adminModules,
    newsletters,
    ccrs,
    bylaws,
    legal,
    minutes,
    discussion,
    displayPDF,
    comments,
    archived,
    events,
    watch,
})

export default rootReducer
