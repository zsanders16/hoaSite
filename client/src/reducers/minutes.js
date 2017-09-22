const minutes = (state = [], action) => {
    switch(action.type) {
        case 'SET_MINUTES':
            return [ ...action.minutes ]
        case 'ADD_MINUTE':
            return [ ...state, action.minutes ]
        case 'REMOVE_MINUTE':
            let minuteList = state.filter( minutes => {
                return minutes.id !== action.minutes.id
            })
            return [ ...minuteList ]
        case 'CLEAR_MINUTES':
            return []
        default:
            return state;
    }
}
  
export default minutes;