const defaults = {
  data: [],
  active: [],
}

const events = (state = defaults, action) => {
    switch(action.type) {
      case 'SET_EVENTS':
        return {
          ...state,
          data: action.events,
        };
      case 'ADD_EVENT':
        return {
          ...state,
          data: [ action.event, ...state.data ]
        }
      case 'REMOVE_EVENT':
        let newEvents = state.data.filter( event => {
           return event.id !== action.event.id;
        })
        return {
          ...state,
          data: newEvents
        }
      case 'UPDATE_EVENT':
        const index = state.data.findIndex( event => event.id === action.event.id )
        return {
          ...state,
          data: [
            ...state.data.slice(0,index),
            action.event,
            ...state.data.slice(index + 1),
          ],
        }
      case 'CLEAR_EVENTS':
        return { ...defaults }
      case 'ACTIVE_EVENTS':
        return {
          ...state,
          active: action.data,
        }
      default:
        return state;
    }
  }

  export default events;
