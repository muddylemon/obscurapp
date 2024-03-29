import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  pickImage: ['image'],
  unsetImage: null,
});

export const ImageTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  image: null,
  recent: [],
};

export const ImageSelectors = {
  getImage: state => state.image.image,
  getRecent: state => state.image.recent,
};

export const pickImage = (state, { image }) => {
  let recent = state.recent || [];

  return {
    ...state,
    image,
    recent: [...new Set([...recent, image])],
  };
};

export const unsetImage = state => ({
  ...state,
  image: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PICK_IMAGE]: pickImage,
  [Types.UNSET_IMAGE]: unsetImage,
});
