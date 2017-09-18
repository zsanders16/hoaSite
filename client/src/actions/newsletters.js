import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';
import base64 from 'file-base64';


export const getNewsletters = () => {
    return(dispatch) => {
        axios.get('/api/newsletters')
            .then( res => {
                dispatch({ type: 'SET_NEWSLETTERS', newsletter: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const addNewsletter = (newsletter) => {
    return(dispatch) => {
        axios.post('/api/newsletters', { newsletter: newsletter })
            .then( res => {
                dispatch({ type: 'ADD_NEWSLETTER',  newsletter: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearNewsletters = (dispatch) => {
    dispatch({ type: 'CLEAR_NEWSLETTERS'})
}


export const displayNewsletter = (newsletter) => {
    return(dispatch) => {
        axios.get(`/api/newsletters/${newsletter.id}`)
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

export const deleteNewsletter = (newsletter) => {
    return(dispatch) => {
        axios.delete(`/api/newsletters/${newsletter.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_NEWSLETTER', newsletter: newsletter })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}