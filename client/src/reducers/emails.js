const defaults = {
  data: [],
  pagination: {
    total_pages: '',
    current_page: '',
    next_page: '',
  },
  email: {},
}

export const emails = ( state = defaults, action ) => {
  switch ( action.type ) {
    case 'RESET_EMAILS':
      return { ...defaults }
    case 'INDEX_EMAILS':
      return {
        ...state,
        data: action.data.data,
        pagination: action.data.pagination,
      }
    case 'SHOW_EMAIL':
      return {
        ...state,
        email: action.data,
      }
    case 'CLEAR_EMAIL':
      return {
        ...state,
        email: {},
      }
    default:
      return state
  }
}

export default emails
