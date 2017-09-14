const newsletters = (state = [], action) => {
    switch(action.type) {
        case 'SET_NEWSLETTERS':
            return [ ...action.newsletter ]
        case 'ADD_NEWSLETTER':
            return [ ...state, action.newsletter ]
        case 'REMOVE_NEWSLETTER':
            let newList = state.filter( newsletter => {
                return newsletter.id !== action.newsletter.id
            })
            return [ ...newList ]
        default:
            return state;
    }
}
  
export default newsletters;