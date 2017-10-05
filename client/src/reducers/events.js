const defaults = {
  data: [],
  pagination: {
    total_pages: '',
    current_page: '',
    next_page: '',
  }
}

const events = (state = defaults, action) => {
    switch(action.type) {
      case 'SET_EVENTS':
        return {
          ...state,
          data: action.events.data,
          pagination: action.events.pagination,
        };
      case 'ADD_EVENT':
        return {
          ...state,
          data: [ action.event, ...state ]
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
      default:
        return state;
    }
  }

  export default events;
