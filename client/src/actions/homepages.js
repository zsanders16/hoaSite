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

export const updateHomePage = () => {}
export const createHomePage = () => {}
export const deleteHomePage = () => {}
