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

export const addMinute = (minutes) => {
    return(dispatch) => {
        axios.post('/api/minutes', { minutes: minutes })
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