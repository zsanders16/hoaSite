  const watch = ( state = [], action ) => {
    switch( action.type ) {
      case 'RESET_WATCH':
        return []
      case 'INDEX_WATCH':
        return action.data
      default:
        return state
    }
  }
  
  export default watch