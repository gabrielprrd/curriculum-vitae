import actionsTypes from '../constants/files';

// Images
import textIcon from '../assets/images/txt-logo.png';
import jsIcon from '../assets/images/js-logo.png';

const INITIAL_STATE = {
  files: [
    { title: 'curriculum.txt', icon: textIcon },
    { title: 'portfolio.js', icon: jsIcon }
  ],
};

const fileReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.CREATE_FILE:
      return { ...state, files: [state.files] };
    case actionsTypes.DELETE_FILE:
      return state; // not necessary for now
    default:
      return state;
  }
};

export default fileReducers;
