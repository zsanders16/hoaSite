import axios from 'axios';
import { setFlash } from '../actions/flash';
import { setHeaders } from './headers';


export const getEvents = () => {
    return(dispatch) => {
        axios.get('/api/events')
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
