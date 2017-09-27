const discussion = (state = [], action) => {
    switch(action.type) {
        case 'SET_DISCUSSION':
            return [ ...action.discussion ]
        case 'ADD_DISCUSSION':
            return [ ...state, action.discussion]
        case 'REMOVE_DISCUSSION':
            let newDiscussionList = state.filter( discussion => {
                return discussion.id !== action.discussion.id
            })
            return [ ...newDiscussionList ]
        case 'UPDATE_SINGLEDISCUSSION':
            let updatedDisccusionList = state.filter( discussion => {
                return discussion.id !== action.discussion.id
            })
            if(action.discussion.archive){
                return [ ...updatedDisccusionList ]
            }else{
                return [ action.discussion, ...updatedDisccusionList ]
            }
        case 'CLEAR_DISCUSSION':
            return []
        default:
            return state;
    }
}
  
export default discussion;