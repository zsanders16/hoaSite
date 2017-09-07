const homeowner = (state = [], action) => {
    switch(action.type) {
      case 'SET_HOMEOWNERS':
        return action.homeowners;
      case 'ADD_HOMEOWNER':
        return [ action.homeowner, ...state ]
      case 'REMOVE_HOMEOWNER':
        let newHomeowners = state.filter( homeowner => {
           return homeowner.id !== action.homeownerID;
        })
        return newHomeowners;
      case 'UPDATE_HOMEOWNER':
        let updatedHomeowners = state.filter( homeowner => {
          return homeowner.id !== action.homeowner.id;
        })
        return [ action.homeowner, ...updatedHomeowners ]
      default:
        return state;
    }
  }
  
  export default homeowner;
  