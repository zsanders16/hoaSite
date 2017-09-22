import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getLegals = () => {
    return(dispatch) => {
        axios.get('/api/legal')
            .then( res => {
                dispatch({ type: 'SET_LEGALS', legal: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const addLegal = (legal) => {
    return(dispatch) => {
        axios.post('/api/legal', { legal: legal })
            .then( res => {
                dispatch({ type: 'ADD_LEGAL',  legal: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearLegals = (dispatch) => {
    dispatch({ type: 'CLEAR_LEGALS'})
}

export const displayLegal = (legal) => {
    return(dispatch) => {
        axios.get(`/api/legal/${legal.id}`)
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

export const deleteLegal = (legal) => {
    return(dispatch) => {
        debugger
        axios.delete(`/api/legal/${legal.id}`)
            .then( res => {
                debugger
                dispatch({ type: 'REMOVE_LEGAL', legal: legal })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}