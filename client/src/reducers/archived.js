const archived= (state = [], action) => {
    switch(action.type) {
        case 'SET_ARCHIVED':
            return [ ...action.archived ];
        case 'REMOVE_ARCHIVE':
            let newArchiveList = state.filter( archive => {
                return archive.id !== action.archive.id
            })
            return [ ...newArchiveList ]
        case 'CLEAR_ARCHIVED':
            return [];
        default:
            return state;
    }
  }
  
  export default archived;