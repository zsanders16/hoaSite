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
      case 'UPDATE_LEGAL':
        let updateLegalModules = state.filter( module => {
          return module.name !== 'legal'
        })
        updateLegalModules.push(action.legal)
        return [...updateLegalModules]
      case 'UPDATE_MINUTES':
        let updateMinutesModules = state.filter( module => {
          return module.name !== 'minutes'
        })
        updateMinutesModules.push(action.minutes)
        return [...updateMinutesModules]
      default:
        return state;
    }
}
  
export default adminModules;