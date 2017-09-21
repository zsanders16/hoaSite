import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getBylaws = () => {
    return(dispatch) => {
        axios.get('/api/bylaws')
            .then( res => {
                dispatch({ type: 'SET_BYLAWS', bylaw: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const addBylaw = (bylaw) => {
    return(dispatch) => {
        axios.post('/api/bylaws', { bylaw: bylaw })
            .then( res => {
                dispatch({ type: 'ADD_BYLAW',  bylaw: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearBylaws = (dispatch) => {
    dispatch({ type: 'CLEAR_BYLAWS'})
}


export const displayBylaw = (bylaw) => {
    return(dispatch) => {
        axios.get(`/api/bylaws/${bylaw.id}`)
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

export const deleteBylaw = (bylaw) => {
    return(dispatch) => {
        axios.delete(`/api/bylaws/${bylaw.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_BYLAW', bylaw: bylaw })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}