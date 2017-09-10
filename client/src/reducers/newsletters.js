const newsletters = (state = [], action) => {
    switch(action.type) {
        case 'SET_NEWSLETTERS':
            debugger
            return [ ...action.newsletter ]
        case 'ADD_NEWSLETTER':
            return [ ...state, action.newsletter ]
        default:
            return state;
    }
}
  
export default newsletters;