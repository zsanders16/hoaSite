const defaults = {
  data: {},
  reload: false,
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
    default:
      return state
  }
}

export default homepage
