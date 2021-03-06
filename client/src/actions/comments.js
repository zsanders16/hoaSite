import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getComments = (messageId) => {
    return(dispatch) => {
        axios.get(`/api/messages/${messageId}/comments`)
            .then( res => {
                dispatch({ type: 'SET_COMMENTS', comments: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const addComment = (messageId, comment) => {
    return(dispatch) => {
        axios.post(`/api/messages/${messageId}/comments`, { comment: comment })
            .then( res => {
                dispatch({ type: 'ADD_COMMENT',  comment: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const clearComments = (dispatch) => {
    dispatch({ type: 'CLEAR_COMMENTS'})
}


export const deleteComment = (comment) => {
    return(dispatch) => {
        axios.delete(`/api/messages/${comment.message_id}/comments/${comment.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_COMMENT', comment: comment })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}