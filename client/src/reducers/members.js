const defaults = {
  data: [],
}

const members = ( state = defaults, action ) => {
  switch( action.type ) {
    case 'RESET_MEMBERS':
      return { ...defaults }
    case 'INDEX_MEMBERS':
      return {
        ...state,
        data: action.data,
      }
    default:
      return state
  }
}

export default members
