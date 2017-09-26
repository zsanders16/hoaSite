const comments = (state = [], action) => {
    switch(action.type) {
        case 'SET_COMMENTS':
            return [ ...action.comments ]
        case 'ADD_COMMENT':
        debugger
            return [ ...state, action.comment]
        case 'REMOVE_COMMENT':
            let newcommentsList = state.filter( comments=> {
                return comments.id !== action.comments.id
            })
            return [ ...newcommentsList ]
        case 'CLEAR_COMMENTS':
            return []
        default:
            return state;
    }
}
  
export default comments;