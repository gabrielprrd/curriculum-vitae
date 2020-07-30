import actionsTypes from '../constants/files';

const INITIAL_STATE = {
  files: ['curriculum.txt', 'portfolio.js'],
};

const fileReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.CREATE_FILE:
      return { ...state, files: [state.files] };
    case actionsTypes.DELETE_FILE:
      // needs to create a way to remove the item
      return { ...state, files: [state.files] };
    default:
      return state;
  }
};

export default fileReducers;
