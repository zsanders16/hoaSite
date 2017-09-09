import axios from 'axios';
import { setFlash } from '../../actions/flash';
import { setHeaders } from '../headers';


export const getNewsletterModule = () => {
    return(dispatch) => {
        axios.get('api/newsletters_admin/index')
            .then( res => {
                dispatch({ type: 'ADD_MODULE', newsletter: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const updateNewsletters = (newsletterAdmin) => {
    return(dispatch) => {
        axios.post('/api/newsletters_admin/update', {newsletterAdmin})
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