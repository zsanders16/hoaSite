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
import displayPDF from './displayPDF'

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
    displayPDF,
})

export default rootReducer
