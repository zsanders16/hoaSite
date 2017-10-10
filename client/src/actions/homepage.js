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
