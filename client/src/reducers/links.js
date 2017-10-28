const defaults = {
  data: [],
  pagination: {
    total_pages: '',
    current_page: '',
    next_page: '',
  },
  footer: [],
}

const links = ( state = defaults, action ) => {
  switch( action.type ) {
    case 'RESET_LINKS':
      return { ...defaults }
    case 'INDEX_LINKS':
      return {
        ...state,
        data: action.data.data,
        pagination: action.data.pagination,
      }
    case 'CREATE_LINK':
      return {
        ...state,
        data: [
          action.data,
          ...state.data,
        ],
      }
    case 'DELETE_LINK':
      return {
        ...state,
        data: state.data.filter( link => link.id !== action.data ),
      }
    case 'FOOTER_LINKS':
      return {
        ...state,
        footer: action.data
      }
    default:
      return state
  }
}

export default links
