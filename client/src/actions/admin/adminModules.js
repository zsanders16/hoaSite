import axios from 'axios';
import { setFlash } from '../../actions/flash';
import { setHeaders } from '../headers';


export const getNewsletterModule = () => {
    return(dispatch) => {
        axios.get('api/admin_modules_status/newsletters')
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

export const updateComponentActiveStatus = () => {
    return(dispatch) => {
        debugger
        axios.get('api/admin_modules_status/updateNewslettersActiveStatus')
            .then( res => {
                debugger
                dispatch({ type: 'UPDATE_NEWSLETTER_ACTIVE', newsletter: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}