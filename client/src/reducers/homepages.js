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
    default:
      return state
  }
}

export default homepages
