import axios from 'axios'
import { setFlash } from './flash'

const query_string = ( page = 1, per = 4 ) => {
  return `?page=${page}&per=${per}`
}

export const indexCarousel = ( page, per ) => {
  return (dispatch) => {
    axios.get(`/api/carousels${query_string(page,per)}`)
    .then( resp => {
      dispatch({
        type: 'INDEX_CAROUSEL',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Carousel Images not Indexed!','error')
      )
    })
  }
}

export const activeCarousel = ( page, per ) => {
  return (dispatch) => {
    axios.get(`/api/carousels/active${query_string(page,per)}`)
    .then( resp => {
      dispatch({
        type: 'ACTIVE_CAROUSEL',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Carousel Active Images not Indexed!','error')
      )
    })
  }
}

export const inactiveCarousel = ( page, per ) => {
  return (dispatch) => {
    axios.get(`/api/carousels/inactive${query_string(page,per)}`)
    .then( resp => {
      dispatch({
        type: 'INACTIVE_CAROUSEL',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Carousel Inactive Images not Indexed!','error')
      )
    })
  }
}

export const resetCarousel = ( page, per ) => {
  return {
    type: 'RESET_CAROUSEL',
  }
}

export const showCarouselImage = ( imageId ) => {
  return (dispatch) => {
    axios.get(`/api/carousels/${imageId}`)
    .then( resp => {
      dispatch({
        type: 'SHOW_CAROUSEL_IMAGE',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Carousel Image not Shown!','error')
      )
    })
  }
}

export const updateCarouselImage = ( image ) => {
  return (dispatch) => {
    axios.patch(`/api/carousels/${image.id}`, { carousel: image })
    .then( resp => {
      dispatch({
        type: 'UPDATE_CAROUSEL_IMAGE',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Carousel Image not Updated!','error')
      )
    })
  }
}

export const createCarouselImage = ( image ) => {
  return (dispatch) => {
    axios.post(`/api/carousels`, { carousel: image })
    .then( resp => {
      dispatch({
        type: 'CREATE_CAROUSEL_IMAGE',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Carousel Image not Created!','error')
      )
    })
  }
}

export const deleteCarouselImage = ( imageId ) => {
  return (dispatch) => {
    axios.delete(`/api/carousels/${imageId}`)
    .then( resp => {
      dispatch({
        type: 'DELETE_CAROUSEL_IMAGE',
        data: imageId,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(
        setFlash('Carousel Image not Deleted!','error')
      )
    })
  }
}
