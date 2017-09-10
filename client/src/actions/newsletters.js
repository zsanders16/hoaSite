import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getNewsletters = () => {
    return(dispatch) => {
        axios.get('api/newsletters')
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
        debugger
        axios.post('/api/newsletters', { newsletter: newsletter })
            .then( res => {
                debugger
                dispatch({ type: 'ADD_NEWSLETTER',  newsletter: res.data})
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}