import axios from 'axios'
import { setFlash } from './flash'


export const indexLinks = ( page=1, per=5 ) => {
  return (dispatch) => {
    axios.get(`/api/links?page=${page}&per=${per}`)
    .then( resp => {
      dispatch({
        type: 'INDEX_LINKS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Links not loaded!','error')
      )
    })
  }
}

export const footerLinks = () => {
  return (dispatch) => {
    axios.get(`/api/links/footer`)
    .then( resp => {
      dispatch({
        type: 'FOOTER_LINKS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Footer Links not loaded!','error')
      )
    })
  }
}


export const createLink = ( link ) => {
  return (dispatch) => {
    axios.post(`/api/links`, { link } )
    .then( resp => {
      dispatch({
        type: 'CREATE_LINK',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Link not Created!','error')
      )
    })
  }
}

export const deleteLink = ( linkId ) => {
  return (dispatch) => {
    axios.delete(`/api/links/${linkId}`)
    .then( resp => {
      dispatch({
        type: 'DELETE_LINK',
        data: linkId,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Link not Deleted!','error')
      )
    })
  }
}

export const resetLinks = () => {
  return {
    type: 'RESET_LINKS',
  }
}
