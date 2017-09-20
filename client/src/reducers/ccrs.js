const ccrs = (state = [], action) => {
    switch(action.type) {
        case 'SET_CCRS':
            return [ ...action.ccr]
        case 'ADD_CCR':
            return [ ...state, action.ccr ]
        case 'REMOVE_CCR':
            let newCcrList = state.filter( ccr => {
                return ccr.id !== action.ccr.id
            })
            return [ ...newCcrList ]
        case 'CLEAR_CCRS':
            return []
        default:
            return state;
    }
}
  
export default ccrs;