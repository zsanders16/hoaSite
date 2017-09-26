import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getDiscussions = () => {
    let fullDiscussion = []
    return(dispatch) => {
        axios.get('/api/messages')
            .then( res => {
                dispatch({ type: 'SET_DISCUSSION', discussion: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const addDiscussion = (discussion) => {
    return(dispatch) => {
        axios.post('/api/messages', { message: discussion })
            .then( res => {
                dispatch({ type: 'ADD_DISCUSSION',  discussion: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearDiscussions = (dispatch) => {
    dispatch({ type: 'CLEAR_DISCUSSIONS'})
}


export const deleteDiscussion = (discussion) => {
    return(dispatch) => {
        axios.delete(`/api/messages/${discussion.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_DISCUSSION', discussion: discussion })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}