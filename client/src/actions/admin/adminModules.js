import axios from 'axios';
import { setFlash } from '../../actions/flash';
import { setHeaders } from '../headers';

// Newsletters Admin Module
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

// CCRs and ByLaws Admin Module
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
                    dispatch({ type: 'UPDATE_CCR', ccr: res.data })
                    dispatch(setHeaders(res.headers))
                })
                .catch( res => {
                    const message = res.response.data.errors.join(',');
                    dispatch(setFlash(message, 'error'));
                })
        }
    }

// Legal Admin Module
    export const getLegalModule = () => {
        return(dispatch) => {
            axios.get('/api/legal_admin')
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


    export const updateLegalModule = (legalAdmin) => {
        return(dispatch) => {
            axios.put('/api/legal_admin/1', {legalAdmin})
                .then( res => {
                    dispatch({ type: 'UPDATE_LEGAL', legal: res.data })
                    dispatch(setHeaders(res.headers))
                })
                .catch( res => {
                    const message = res.response.data.errors.join(',');
                    dispatch(setFlash(message, 'error'));
                })
        }
    }

// Minutes Admin Module
    export const getMinutesModule = () => {
        return(dispatch) => {
            axios.get('/api/minutes_admin')
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


    export const updateMinutesModule = (minutesAdmin) => {
        return(dispatch) => {
            axios.put('/api/minutes_admin/1', {minutesAdmin})
                .then( res => {
                    dispatch({ type: 'UPDATE_MINUTES', minutes: res.data })
                    dispatch(setHeaders(res.headers))
                })
                .catch( res => {
                    const message = res.response.data.errors.join(',');
                    dispatch(setFlash(message, 'error'));
                })
        }
    }

//Discussion Admin controllers
    export const getDiscussionModule = () => {
        return(dispatch) => {
            axios.get('/api/discussion_admin')
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


    export const updateDiscussionModule = (discussionAdmin) => {
        return(dispatch) => {
            axios.put('/api/discussion_admin/1', {discussionAdmin})
                .then( res => {
                    dispatch({ type: 'UPDATE_DISCUSSION', discussion: res.data })
                    dispatch(setHeaders(res.headers))
                })
                .catch( res => {
                    const message = res.response.data.errors.join(',');
                    dispatch(setFlash(message, 'error'));
                })
        }
    }
