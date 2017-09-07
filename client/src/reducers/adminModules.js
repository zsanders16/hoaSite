const adminModules = (state = [], action) => {
    switch(action.type) {
      case 'ADD_MODULE':
        return [ ...state, action.newsletter ]
      case 'UPDATE_NEWSLETTER_ACTIVE':
        let modules = state
        modules.forEach( module => {
          if(module.name === 'newsletter'){
            module.active = action.newsletter.active
          }
        });
        return modules
      default:
        return state;
    }
}
  
export default adminModules;