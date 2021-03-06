import axios from 'axios'
import { setFlash } from './flash'

export const indexToAddresses = () => {
  return (dispatch) => {
    axios.get(`/api/requests/`)
    .then( resp => {
      dispatch({
        type: 'INDEX_TO_ADDRESS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('To Addresses not Located!','error')
      )
    })
  }
}

export const clearToAddresses = () => {
  return {
    type: 'CLEAR_TO_ADDRESSES',
  }
}

export const createRequestAccess = ( request ) => {
  return (dispatch) => {
    axios.post(`/api/requests/access`, { request } )
    .then( resp => {
      dispatch({
        type: 'CREATE_REQUEST_ACCESS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Access Request not created!','error')
      )
    })
  }
}
