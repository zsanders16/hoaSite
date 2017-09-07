import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import homeowners from './homeowners'
import adminModules from './adminModules'

const rootReducer = combineReducers({
    user,
    flash,
    homeowners,
    adminModules,
})

export default rootReducer
