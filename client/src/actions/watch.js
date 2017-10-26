import axios from 'axios'
import { setFlash } from './flash'

export const indexWatch = () => {
  return (dispatch) => {
    axios.get(`/api/watch_members`)
    .then( resp => {
      dispatch({
        type: 'INDEX_WATCH',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Watch Members Not Located','error')
      )
    })
  }
}

export const resetWatch = (dispatch) => {
    dispatch({ type: 'RESET_WATCH' }) 
}