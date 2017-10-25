const defaults = {
  data: {},
  reload: false,
  headerImage: '',
}
const homepage = ( state = defaults, action ) => {
  switch( action.type ) {
    case 'SHOW_HOMEPAGE':
      return {
        ...state,
        data: action.data,
      }
    case 'RELOAD_HOMEPAGE':
      return {
        ...state,
        reload: true,
      }
    case 'HEADER_IMAGE':
      return {
        ...state,
        headerImage: action.data,
      }
    default:
      return state
  }
}

export default homepage
