const defaults = {
  data: [],
  pagination: {},
  carouselImage: {},
}

const carousel = ( state = defaults, action ) => {
  switch( action.type ) {
    case 'INDEX_CAROUSEL':
    case 'ACTIVE_CAROUSEL':
    case 'INACTIVE_CAROUSEL':
      return {
        ...state,
        data: action.data.data,
        pagination: action.data.pagination,
      }
    case 'SHOW_CAROUSEL_IMAGE':
      return {
        ...state,
        carouselImage: action.data,
      }
    case 'CREATE_CAROUSEL_IMAGE':
      return {
        ...state,
        data: [
          action.data,
          ...state.data,
        ]
      }
    case 'UPDATE_CAROUSEL_IMAGE':
      const index = state.data.findIndex( ci => ci.id === action.data.id )
      return {
        ...state,
        data: [
          ...state.data.slice(0,index),
          action.data,
          ...state.data.slice(index+1),
        ],
      }
    case 'DELETE_CAROUSEL_IMAGE':
      const filtered = state.data.filter( ci => ci.id !== action.data )
      return {
        ...state,
        data: filtered
      }
    case 'RESET_CAROUSEL':
      return {
        ...defaults,
      }
    default:
      return state
  }
}

export default carousel
