const bylaws = (state = [], action) => {
    switch(action.type) {
        case 'SET_BYLAWS':
            return [ ...action.bylaw]
        case 'ADD_BYLAW':
            return [ ...state, action.bylaw ]
        case 'REMOVE_BYLAW':
            let newbylawList = state.filter( bylaw => {
                return bylaw.id !== action.bylaw.id
            })
            return [ ...newbylawList ]
        case 'CLEAR_BYLAWS':
            return []
        default:
            return state;
    }
}
  
export default bylaws;