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

const rootReducer = combineReducers({
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
})

export default rootReducer
