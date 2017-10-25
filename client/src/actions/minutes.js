import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getMinutes = () => {
    return(dispatch) => {
        axios.get('/api/minutes')
            .then( res => {
                dispatch({ type: 'SET_MINUTES', minutes: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const getNonAdminMinutes = () => {
    return(dispatch) => {
        axios.get('/api/minutes_non_admin')
            .then( res => {
                dispatch({ type: 'SET_MINUTES', minutes: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const addMinute = (minutes) => {
    return(dispatch) => {
        axios.post('/api/minutes', { minutes})
            .then( res => {
                dispatch({ type: 'ADD_MINUTE',  minutes: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const updateMinutes = (minutes) => {
    return(dispatch) => {
        axios.put(`/api/minutes/${minutes.id}`, {minutes})
            .then( res => {
                dispatch({ type: 'UPDATE_MINUTE', minutes: res.data, headers: res.headers })
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearMinutes = (dispatch) => {
    dispatch({ type: 'CLEAR_MINUTES'})
}

export const displayMinute = (minutes) => {
    return(dispatch) => {
        axios.get(`/api/minutes/${minutes.id}`)
            .then( res => {
                dispatch({ type: 'SET_DISPLAYPDF', object: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const deleteMinute = (minutes) => {
    return(dispatch) => {
        axios.delete(`/api/minutes/${minutes.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_MINUTE', minutes: minutes })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}