import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';


export const getDiscussions = () => {
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

export const getArchivedDiscussion = () => {
    return(dispatch) => {
        axios.get('/api/archived_messages')
            .then( res => {
                dispatch({ type: 'SET_ARCHIVED', archived: res.data })
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

export const updateDiscussion = (discussion, history) => {
    return(dispatch) => {
        axios.put(`/api/messages/${discussion.id}`, {message: discussion})
            .then( res => {
                dispatch({ type: 'UPDATE_SINGLEDISCUSSION', discussion: res.data })
                dispatch(setHeaders(res.headers))
                history.push('../admin/discussion')
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }       
}

export const updateArchive = (discussion, history) => {
    return(dispatch) => {
        axios.put(`/api/messages/${discussion.id}`, {message: discussion})
            .then( res => {
                dispatch({ type: 'UPDATE_SINGLEDISCUSSION', discussion: res.data })
                dispatch({ type: 'REMOVE_ARCHIVE', archive: res.data })
                dispatch(setHeaders(res.headers))
                history.push('/admin/discussion')
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

export const deleteDiscussion = (discussion, history) => {
    return(dispatch) => {
        axios.delete(`/api/messages/${discussion.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_ARCHIVE', discussion: discussion })
                dispatch(setHeaders(res.headers))
                history.push('../admin/discussion')
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const deleteArchive = (discussion, history) => {
    return(dispatch) => {
        axios.delete(`/api/messages/${discussion.id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_DISCUSSION', discussion: discussion })
                dispatch(setHeaders(res.headers))
                history.push('../admin/discussion/archive')
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}