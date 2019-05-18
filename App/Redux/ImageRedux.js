import { createReducer, createActions } from 'reduxsauce'
import { List } from 'immutable'

const { Types, Creators } = createActions({
  pickImage: ['image'],
  unsetImage: null
})

export const ImageTypes = Types
export default Creators

export const INITIAL_STATE = {
  image: {},
  recent: List()
}

export const ImageSelectors = {
  getImage: state => state.image.image,
  getRecent: state => state.image.recent
}

export const pickImage = (state, { image }) => {
  return { ...state, image }
}

export const unsetImage = state => state.merge({ image: null })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PICK_IMAGE]: pickImage,
  [Types.UNSET_IMAGE]: unsetImage
})
