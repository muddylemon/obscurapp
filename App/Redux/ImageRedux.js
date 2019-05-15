import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  pickImage: ['image'],
  unsetImage: null,
  updateOpacity: ['opacity']
})

export const ImageTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  image: {},
  opacity: 0.5
})

export const ImageSelectors = {
  getImage: state => state.image.image,
  getOpacity: state => state.image.opacity
}

export const pickImage = (state, { image }) => state.merge({ image })

export const unsetImage = state => state.merge({ image: null })

export const updateOpacity = (state, { opacity }) => state.merge({ opacity })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PICK_IMAGE]: pickImage,
  [Types.UNSET_IMAGE]: unsetImage,
  [Types.UPDATE_OPACITY]: updateOpacity
})
