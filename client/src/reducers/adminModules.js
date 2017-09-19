const adminModules = (state = [], action) => {
    switch(action.type) {
      case 'ADD_MODULE':
        return [ ...state, action.module ]
      case 'UPDATE_NEWSLETTER':
        let updateNewsletterModules = state.filter( module => {
          return module.name !== 'newsletter'
        })
        updateNewsletterModules.push(action.newsletter)
        return [...updateNewsletterModules]
      case 'UPDATE_CCR':
        let updateCcrModules = state.filter( module => {
          return module.name !== 'ccr'
        })
        updateCcrModules.push(action.ccr)
        return [...updateCcrModules]
      default:
        return state;
    }
}
  
export default adminModules;