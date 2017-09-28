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
      case 'STATUS_HOMEOWNERS':
        const index = state.findIndex( ho => ho.id === action.userId )
        let homeowner = state[index]
        homeowner.status = action.status
        return [
          ...state.slice(0,index),
          homeowner,
          ...state.slice(index + 1),
        ]
      default:
        return state;
    }
  }

  export default homeowner;
