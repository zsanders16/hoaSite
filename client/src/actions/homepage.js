import axios from 'axios'
import { setFlash } from './flash'

export const activeHomepage = () => {
  return (dispatch) => {
    axios.get(`/api/home_pages/active`)
      .then( resp => {
        dispatch({
          type: 'SHOW_HOMEPAGE',
          data: resp.data[0],
          headers: resp.headers,
        })
      })
      .catch( resp => {
        dispatch(
          setFlash('Active Home Page Not Found!','error')
        )
      })
  }
}

export const reloadHomepage = () => {
  return {
    type: 'RELOAD_HOMEPAGE',
  }
}

export const loadHeaderImage = () => {
  return (dispatch) => {
    axios.get('/api/home_pages/header_image')
    .then( resp => {
      dispatch({
        type: 'HEADER_IMAGE',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Header Image Not Loaded!','error')
      )
    })
  }
}
