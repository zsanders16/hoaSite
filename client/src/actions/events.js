import axios from 'axios';
import { setFlash } from '../actions/flash';
import { setHeaders } from './headers';


export const getEvents = ( page=1, per=5 ) => {
  const query = `?page=${page}&per=${per}`
    return(dispatch) => {
        axios.get(`/api/events${query}`)
            .then( res => {
                dispatch({ type: 'SET_EVENTS', events: res.data, headers: res.headers });
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                 dispatch(setFlash(message, 'error'));
            })
    }
}

export const addEvent = (event) => {
    return(dispatch) => {
        axios.post('/api/events', {event})
            .then( res => {
                dispatch({ type: 'ADD_EVENT', event: res.data, headers: res.headers });
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                 dispatch(setFlash(message, 'error'));
            })
    }
}

export const updateEvent = (event) => {
    return(dispatch) => {
        axios.put(`/api/events/${event.id}`, {event})
            .then( res => {
                dispatch({ type: 'UPDATE_EVENT', event: res.data, headers: res.headers })
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                 dispatch(setFlash(message, 'error'));
            })
    }
}

export const removeEvent = (event) => {
    return(dispatch) => {
        axios.delete(`/api/events/${event.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_EVENT', event: event, headers: res.headers });
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                 dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearEvents = () => {
  return {
    type: 'CLEAR_EVENTS',
  }
}

export const activeEvents = () => {
  return (dispatch) => {
    axios.get(`/api/events/active`)
    .then( resp => {
      dispatch({
        type: 'ACTIVE_EVENTS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Active Events Not Found!','error')
      )
    })
  }
}
