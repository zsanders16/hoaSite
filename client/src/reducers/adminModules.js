const adminModules = (state = [], action) => {
    switch(action.type) {
      case 'ADD_MODULE':
        return [ ...state, action.newsletter ]
      case 'UPDATE_NEWSLETTER':
        let updateModules = state.filter( module => {
          return module.name !== 'newsletter'
        })
        updateModules.push(action.newsletter)
        return [...updateModules]
      default:
        return state;
    }
}
  
export default adminModules;