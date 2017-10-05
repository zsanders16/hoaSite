import axios from 'axios'
import { setFlash } from './flash'

export const indexHomePages = ( page=1, per=5 ) => {
  const query = `?page=${page}&per=${per}`
  return (dispatch) => {
    axios.get(`/api/home_pages${query}`)
    .then( resp => {
      dispatch({
        type: 'INDEX_HOMEPAGES',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('HomePages not Found!','error')
      )
    })
  }
}

export const resetHomePages = () => {
  return {
    type: 'RESET_HOMEPAGES',
  }
}

export const updateHomePage = ( home_page ) => {
  return (dispatch) => {
    axios.patch(`/api/home_pages/${home_page.id}`, { home_page })
    .then( resp => {
      dispatch({
        type: 'UPDATE_HOMEPAGE',
        data: resp.data,
        headers: resp.headers
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('HomePage not Updated!','error')
      )
    })
  }
}

export const createHomePage = ( home_page ) => {
  return (dispatch) => {
    axios.post(`/api/home_pages`, { home_page })
    .then( resp => {
      dispatch({
        type: 'CREATE_HOMEPAGE',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('HomePages not Found!','error')
      )
    })
  }
}

export const deleteHomePage = ( homepageId ) => {
  return (dispatch) => {
    axios.delete(`/api/home_pages/${homepageId}`)
    .then( resp => {
      dispatch({
        type: 'DELETE_HOMEPAGE',
        data: homepageId,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('HomePages not Found!','error')
      )
    })
  }
}
