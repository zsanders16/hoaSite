const homepage = ( state = {}, action ) => {
  switch( action.type ) {
    case 'SHOW_HOMEPAGE':
      return action.data
    default:
      return state
  }
}

export default homepage
