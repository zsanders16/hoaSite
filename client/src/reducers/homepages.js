const defaults = {
  data: [],
  pagination: {
    total_pages: '',
    current_page: '',
    next_page: '',
  },
}

const homepages = ( state = defaults, action ) => {
  switch( action.type ) {
    case 'INDEX_HOMEPAGES':
      return {
        ...state,
        data: action.data.data,
        pagination: action.data.pagination,
      }
    case 'RESET_HOMEPAGES':
      return {
        ...defaults
      }
    case 'UPDATE_HOMEPAGE':
      const index = state.data.findIndex( hp => hp.id === action.data.id )
      return {
        ...state,
        data: [
          ...state.data.slice(0,index),
          action.data,
          ...state.data.slice(index + 1),
        ],
      }
    case 'CREATE_HOMEPAGE':
      // TODO: reset the active status of the homepages to 'inactive'
      let newState = []
      if( action.data.active === 1 ) {
        newState = state.data.map( hp => {
          hp.active = 0
          return hp
        })
      } else {
        newState = state
      }
      return {
        ...state,
        data: [
          action.data,
          ...newState,
        ]
      }
    case 'DELETE_HOMEPAGE':
      return {
        ...state,
        data: state.data.filter( hp => hp.id !== action.data ),
      }
    default:
      return state
  }
}

export default homepages
