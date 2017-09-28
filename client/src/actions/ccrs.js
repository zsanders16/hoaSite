import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getCcrs = () => {
    return(dispatch) => {
        axios.get('/api/ccr')
            .then( res => {
                dispatch({ type: 'SET_CCRS', ccr: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const addCcr = (ccr) => {
    return(dispatch) => {
        axios.post('/api/ccr', { ccr: ccr })
            .then( res => {
                dispatch({ type: 'ADD_CCR',  ccr: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearCcrs = (dispatch) => {
    dispatch({ type: 'CLEAR_CCRS'})
}


export const displayCcr = (ccr) => {
    return(dispatch) => {
        axios.get(`/api/ccr/${ccr.id}`)
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

export const deleteCcr = (ccr) => {
    return(dispatch) => {
        axios.delete(`/api/ccr/${ccr.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_CCR', ccr: ccr })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}
