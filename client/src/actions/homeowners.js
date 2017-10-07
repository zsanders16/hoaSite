import axios from 'axios';
import { setFlash } from '../actions/flash';
import { setHeaders } from './headers';


export const getHomeowners = () => {
    return(dispatch) => {
        axios.get('/api/homeowners')
            .then( res => {
                debugger
                dispatch({ type: 'SET_HOMEOWNERS', homeowners: res.data});
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                 dispatch(setFlash(message, 'error'));
            })
    }
}

export const removeHomeowner = (id) => {
    return(dispatch) => {
        axios.delete(`/api/homeowners/${id}`)
            .then( res => {
                dispatch({ type: 'REMOVE_HOMEOWNER', homeownerID: id});
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                 dispatch(setFlash(message, 'error'));
            })
    }
}

export const updateHomeowner = (homeowner) => {
    return(dispatch) => {
        axios.put(`/api/homeowners/${homeowner.id}`, {homeowner: homeowner})
            .then( res => {
                dispatch({ type: 'UPDATE_HOMEOWNER', homeowner: res.data })
                dispatch(setHeaders(res.headers))
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                 dispatch(setFlash(message, 'error'));
            })
    }
}

export const statusHomeowners = ( userId, status, callback = '' ) => {
    return (dispatch) => {
        axios.patch(`/api/homeowners/${userId}/status?status=${status}`)
        .then( resp => {
            dispatch({
                type: 'STATUS_HOMEOWNERS',
                status: resp.data.status,
                userId: userId,
                headers: resp.headers,
            })
            if( callback ) {
                callback(resp.data.status)
            }
        })
        .catch( resp => {
        dispatch(
            setFlash('Homeowners Status Not Updated!','error')
        )
    })
  }
}

export const unlockPassword = (obj, password, password_confirmation) => {
    debugger
    return(dispatch) => {
        // axios({
        //     method: 'put',
        //     url: '/api/auth/password',
        //     params: {password, password_confirmation},
        //     headers: obj
        // }).then( res => {
        //     debugger
        // })

        axios.put('/api/auth/password', {password, password_confirmation, ...obj})
            .then( res => {
                debugger
            })
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const changePassword = (password, password_confirmation, history) => {
    return(dispatch) => {
        axios.put('/api/auth/password', {password, password_confirmation})
            .then( 
                history.push('/')
            )
            .catch( res => {
                const message = res.response.data.errors.join(',');
                dispatch(setFlash(message, 'error'));
            })
    }
}

export const validateToken = (obj, history) => {
    return(dispatch) => {
        axios.get('/api/auth/validate_token', {...obj})
        .then( res => {
            debugger
            let { data: { data: user }, headers } = res
            dispatch({ type: 'LOGIN', user, headers });
        })
        .catch( res => {
            const message = res.response.data.errors.join(',');
            dispatch(setFlash(message, 'error'));
        })
    }
}
