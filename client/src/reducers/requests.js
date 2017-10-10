const defaults = {
  to: [],
}

const requests = ( state = defaults, action ) => {
  switch( action.type ) {
    case 'INDEX_TO_ADDRESS':
      return {
        ...state,
        to: action.data
      }
    case 'CLEAR_TO_ADDRESSES':
      return {
        ...state,
        to: [],
      }
    default:
      return state
  }
}

export default requests
