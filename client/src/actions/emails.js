import axios from 'axios'
import { setFlash } from './flash'

export const indexEmails = ( page=1, per=5 ) => {
  const query = `?page=${page}&per=${per}`
  return (dispatch) => {
    axios.get(`/api/emails${query}`)
    .then( resp => {
      dispatch({
        type: 'INDEX_EMAILS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Emails not found!','error')
      )
    })
  }
}

export const resetEmails = () => {
  return {
    type: 'RESET_EMAILS',
  }
}

export const clearEmail = () => {
  return {
    type: 'CLEAR_EMAIL',
  }
}

export const showEmail = ( emailId, callback = {} ) => {
  return (dispatch) => {
    axios.get(`/api/emails/${emailId}`)
    .then( resp => {
      dispatch({
        type: 'SHOW_EMAIL',
        data: resp.data,
        headers: resp.headers,
      })
      if( callback )
        callback()
    })
    .catch( resp => {
      dispatch(
        setFlash('Email Information not Found!','error')
      )
    })
  }
}

export const deleteEmails = ( ids ) => {
  return (dispatch) => {
    axios.post(`/api/emails/delete`, { ids })
    .then( resp => {
      dispatch({
        type: 'DELETE_EMAILS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Emails not deleted!','error')
      )
    })
  }
}

export const createEmail = ( email ) => {
  return (dispatch) => {
    axios.post(`/api/emails`, { email })
    .then( resp => {
      dispatch({
        type: 'CREATE_EMAIL',
        data: resp.data,
        headers: resp.headers
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Email Not Created!','error')
      )
    })
  }
}
