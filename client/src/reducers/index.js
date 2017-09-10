import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import homeowners from './homeowners'
import adminModules from './adminModules'
import newsletters from './newsletters'

const rootReducer = combineReducers({
    user,
    flash,
    homeowners,
    adminModules,
    newsletters,
})

export default rootReducer
