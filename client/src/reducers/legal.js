const legal = (state = [], action) => {
    switch(action.type) {
        case 'SET_LEGALS':
            return [ ...action.legal ]
        case 'ADD_LEGAL':
            return [ ...state, action.legal ]
        case 'REMOVE_LEGAL':
            let legalList = state.filter( legal => {
                return legal.id !== action.legal.id
            })
            return [ ...legalList ]
        case 'CLEAR_LEGALS':
            return []
        default:
            return state;
    }
}
  
export default legal;