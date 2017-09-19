import axios from 'axios';
import { setFlash } from '../../actions/flash';
import { setHeaders } from '../headers';


export const getNewsletterModule = () => {
    return(dispatch) => {
        axios.get('/api/newsletters_admin')
            .then( res => {
                dispatch({ type: 'ADD_MODULE', module: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}


export const updateNewslettersModule = (newsletterAdmin) => {
    return(dispatch) => {
        axios.put('/api/newsletters_admin/1', {newsletterAdmin})
            .then( res => {
                dispatch({ type: 'UPDATE_NEWSLETTER', newsletter: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const getCcrModule = () => {
    return(dispatch) => {
        axios.get('/api/ccr_admin')
            .then( res => {
                dispatch({ type: 'ADD_MODULE', module: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}


export const updateCcrModule = (ccrAdmin) => {
    return(dispatch) => {
        axios.put('/api/ccr_admin/1', {ccrAdmin})
            .then( res => {
                dispatch({ type: 'UPDATE_NEWSLETTER', ccr: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}