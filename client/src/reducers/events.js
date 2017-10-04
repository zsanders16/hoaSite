const events = (state = [], action) => {
    switch(action.type) {
      case 'SET_EVENTS':
        return action.events;
      case 'ADD_EVENT':
        return [ action.event, ...state ]
      case 'REMOVE_EVENT':
        let newEvents = state.filter( event => {
           return event.id !== action.event.id;
        })
        return newEvents;
      case 'UPDATE_EVENT':
        let updatedEvents = state.filter( event => {
          return event.id !== action.event.id;
        })
        return [ action.event, ...updatedEvents ]
      default:
        return state;
    }
  }

  export default events;
