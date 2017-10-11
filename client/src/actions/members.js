import axios from 'axios'
import { setFlash } from './flash'

export const indexMembers = () => {
  return (dispatch) => {
    axios.get(`/api/board_members`)
    .then( resp => {
      dispatch({
        type: 'INDEX_MEMBERS',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Board Members Not Located','error')
      )
    })
  }
}

export const resetMembers = () => {
  return {
    type: 'RESET_MEMBERS',
  }
}
