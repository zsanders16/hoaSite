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

// export const downloadNewsletter = (newsletter) => {
//     axios.post('/api/newsletters/download', { newsletter: newsletter })
//         .then( res => {
//             debugger
//         })
    
// }

export const deleteNewsletter = (newsletter) => {
    return(dispatch) => {
        debugger
        axios.delete(`/api/newsletters/${newsletter.id}`)
            .then( res => {
                debugger
                dispatch({ type: 'REMOVE_NEWSLETTER', newsletter: newsletter })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}